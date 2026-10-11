/* Load this file before the MathJax library on every new chapter page. */
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']]
  },
  chtml: { scale: 1.04 }
};
