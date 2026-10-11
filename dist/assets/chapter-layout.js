(function () {
  const root = document.querySelector('[data-chapter-layout]');
  if (!root) return;

  const toc = root.querySelector('[data-toc]');
  if (toc) {
    root.querySelectorAll('[data-toc-section]').forEach((section) => {
      const heading = section.querySelector('h2');
      if (!heading || !section.id) return;
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      link.textContent = heading.textContent.trim();
      toc.appendChild(link);
    });
  }

  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  [['prev', prev], ['next', next]].forEach(([name, link]) => {
    if (!link) return;
    const href = root.dataset[`${name}Href`];
    const label = root.dataset[`${name}Label`];
    if (!href || !label) { link.hidden = true; return; }
    link.href = href;
    link.textContent = `${name === 'prev' ? '← ' : ''}${label}${name === 'next' ? ' →' : ''}`;
  });

  root.addEventListener('toggle', (event) => {
    if (event.target.tagName !== 'DETAILS' || !event.target.open) return;
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      window.MathJax.typesetPromise([event.target]).catch(() => {});
    }
  }, true);
}());
