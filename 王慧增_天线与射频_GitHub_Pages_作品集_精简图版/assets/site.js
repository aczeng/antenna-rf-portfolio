(() => {
  'use strict';
  const dialog = document.querySelector('.lightbox');
  let lastTrigger;
  function closeImage() { if (dialog?.open) dialog.close(); }
  dialog?.querySelector('.close-image').addEventListener('click', closeImage);
  dialog?.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeImage(); } });
  dialog?.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastTrigger?.focus(); });
  document.querySelectorAll('[data-media]').forEach(figure => {
    const source = window.PROJECT_IMAGES?.[figure.dataset.media];
    if (!source || typeof source !== 'string') return;
    // Use only local image paths so the portfolio has no remote-image dependency.
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|\/)/i.test(source)) return;
    const stage = figure.querySelector('.media-stage');
    const description = figure.querySelector('.placeholder p').textContent;
    const img = new Image();
    img.alt = description.replace(/^【此处插入：|】$/g, '');
    img.decoding = 'async';
    img.addEventListener('load', () => {
      const button = document.createElement('button'); button.className = 'image-button'; button.type = 'button';
      button.setAttribute('aria-label', '放大查看：' + img.alt); button.append(img); stage.replaceChildren(button);
      button.addEventListener('click', () => {
        if (!dialog || typeof dialog.showModal !== 'function') { window.open(source, '_blank', 'noopener'); return; }
        lastTrigger = button;
        const full = dialog.querySelector('img'); full.src = img.src; full.alt = img.alt;
        dialog.querySelector('#image-title').textContent = img.alt;
        dialog.querySelector('.lightbox-caption').textContent = figure.querySelector('figcaption').textContent;
        dialog.showModal(); document.body.classList.add('modal-open'); dialog.querySelector('.close-image').focus();
      });
    });
    img.addEventListener('error', () => { figure.querySelector('.placeholder span').textContent = '图片暂不可用'; });
    img.src = source;
  });
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.toc a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) links.forEach(a => { const current = a.hash === '#' + entry.target.id; a.classList.toggle('is-active', current); if (current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); });
    }, {rootMargin:'-10% 0px -65% 0px'});
    document.querySelectorAll('.detail-content>section[id]').forEach(section => observer.observe(section));
  }
})();
