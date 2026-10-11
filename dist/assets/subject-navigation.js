(function() {
  const nav = document.querySelector('.cl-sidebar nav, .side nav');
  if (!nav || nav.parentElement.querySelector('.subject-navigation')) return;

  const path = location.pathname.split('/').pop() || 'index.html';
  const subjects = [
    ['index.html', '高等数学', (name) => name === 'index.html' || name.startsWith('calculus-')],
    ['linear-algebra.html', '线性代数', (name) => name === 'linear-algebra.html' || name.startsWith('linear-')],
    ['discrete-math.html', '离散数学', (name) => name === 'discrete-math.html' || name.startsWith('discrete-')],
    ['probability-statistics.html', '概率论与数理统计', (name) => name === 'probability-statistics.html' || name.startsWith(
      'probability-')],
    ['complex-integral-transforms.html', '复变函数与积分变换', (name) => name === 'complex-integral-transforms.html' || name
      .startsWith('complex-')
    ]
  ];
  const roots = new Set(subjects.map(([href]) => href));
  nav.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href').split('#')[0];
    if (roots.has(href)) link.remove();
  });

  const section = document.createElement('section');
  section.className = 'subject-navigation';
  section.setAttribute('aria-label', '学科导航');
  section.innerHTML =
    '<span class="subject-navigation__title">学科导航</span><div class="subject-navigation__list"></div>';
  const list = section.querySelector('.subject-navigation__list');
  subjects.forEach(([href, label, matches]) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    if (matches(path)) link.setAttribute('aria-current', 'page');
    list.appendChild(link);
  });
  nav.parentElement.insertBefore(section, nav);
}());
