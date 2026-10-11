(function () {
  const root = document.querySelector('[data-chapter-layout]');
  if (!root) return;

  const complexPage = location.pathname.split('/').pop();
  const complexContent = {
    'complex-02-analytic-functions.html': {
      intro: '复可导、解析与调和函数的关系；重点辨析 Cauchy–Riemann 方程的条件。',
      concepts: '<h3>复可导、连续与解析</h3><p>复导数 \u200b\\(f^{\\prime}(z_0)=\\lim_{z\\to z_0}[f(z)-f(z_0)]/(z-z_0)\\) 存在时，称在 \\(z_0\\) 可导；在区域内处处可导才称解析。<strong>解析必连续，连续不必可导；在一点可导也不代表邻域解析。</strong></p><h3>Cauchy–Riemann 方程</h3><p>设 \\(f=u+iv\\)。复可导且一阶偏导存在时必有 \u200b\\(u_x=v_y,\\ u_y=-v_x\\)。若一阶偏导在某邻域连续，且 CR 方程在该邻域处处成立，则 \\(f\\) 在该邻域解析。这是常用充分条件，单点 CR 不能替代它。</p><h3>调和函数</h3><p>解析函数的实部和虚部满足 \u200b\\(u_{xx}+u_{yy}=0\\)。已知 \\(u\\) 时，以 \\(v_y=u_x,\\ v_x=-u_y\\) 积分可构造共轭调和函数。</p>',
      methods: '<article class="cl-card"><h3>判定与构造模板</h3><ol><li>写出 \\(u,v\\)，计算四个偏导并解 CR 方程。</li><li>说明偏导在候选邻域连续，给出解析区域。</li><li>已知实部时先验算调和，再由 CR 积分并用另一式确定积分函数。</li></ol></article>',
      examples: '<article class="cl-example"><h3>例题：由实部构造解析函数</h3><p>若 \\(u=x^3-3xy^2\\)，则 \\(v_y=u_x=3x^2-3y^2\\)，从而 \\(v=3x^2y-y^3+\\phi(x)\\)。再由 \\(v_x=-u_y=6xy\\)，得 \u200b\\(\\phi^{\\prime}=0\\)。</p><div class="cl-formula">\\[f(z)=z^3+iC,\\quad C\\in\\mathbb R.\\]</div></article>',
      exercises: '<details class="cl-exercise"><summary>基础：\u200b\\(f(z)=\\overline z\\) 是否解析？</summary><p><strong>思路：</strong>\\(u=x,v=-y\\)。<strong>过程：</strong>\\(u_x=1\\ne-1=v_y\\)。<strong>答案：</strong>任何点都不复可导。<strong>易错点：</strong>连续不推出复可导。</p></details><details class="cl-exercise"><summary>提高：\u200b\\(x^2+y^2\\) 能作解析函数实部吗？</summary><p><strong>过程：</strong>\\(u_{xx}+u_{yy}=4\\ne0\\)。<strong>答案：</strong>不能在任一非空区域内作为实部。</p></details>',
      mistakes: '<aside class="cl-warning"><strong>错误做法：</strong>CR 在一点成立就断言解析。<br><strong>正确做法：</strong>必须说明邻域内 CR 成立并有偏导连续性，或另用定义证明。</aside>',
      formula: '<tr><td>\\(u_x=v_y,\\ u_y=-v_x\\)</td><td>复可导的必要条件；偏导连续且邻域成立时也是充分条件</td><td>判定解析</td></tr><tr><td>\\(u_{xx}+u_{yy}=0\\)</td><td>解析函数实部或虚部</td><td>构造前检查</td></tr>',
      summary: '<article class="cl-summary"><p><strong>必须记忆：</strong>CR 方程、调和方程。<br><strong>必须理解：</strong>必要条件与充分条件的区别。<br><strong>必须会做：</strong>判定解析、由实部求虚部。<br><strong>易丢分：</strong>漏掉邻域和偏导连续性。</p></article>'
    },
    'complex-03-elementary-functions.html': {
      intro: '理解复对数和复幂的多值性，并能用主值与分支得到可计算的单值函数。',
      concepts: '<h3>指数、三角函数</h3><div class="cl-formula">\\[e^{x+iy}=e^x(\\cos y+i\\sin y),\\quad \\sin z=\\frac{e^{iz}-e^{-iz}}{2i},\\quad \\cos z=\\frac{e^{iz}+e^{-iz}}2.\\]</div><p>\\(e^{z+2k\\pi i}=e^z\\)，故复指数不单射。课程涉及时，\\(\\sinh z=(e^z-e^{-z})/2\\)。</p><h3>复对数、分支与复幂</h3><p>因辐角可加 \\(2k\\pi\\)，\u200b\\(\\log z=\\ln|z|+i(\\arg z+2k\\pi)\\;(z\\ne0)\\)，所以对数多值。删去一条从 0 出发的支割线可连续选取辐角；在 \\(\\mathbb C\\setminus(-\\infty,0]\\) 常取 \\(\\operatorname{Arg}z\\in(-\\pi,\\pi)\\)，主支为 \\(\\operatorname{Log}z\\)。复幂 \\(z^\\alpha=e^{\\alpha\\log z}\\)，非整数 \\(\\alpha\\) 通常也是多值的。</p>',
      methods: '<article class="cl-card"><h3>分支题步骤</h3><ol><li>先写模与全体辐角。</li><li>明确支割线和 Arg 的取值区间。</li><li>区分多值 \\(\\log\\) 与主值 \\(\\operatorname{Log}\\)，最后检查题目是否要求全部值。</li></ol></article>',
      examples: '<article class="cl-example"><h3>例题：解 \u200b\\(e^z=-1\\)</h3><p>\\(-1=e^{i(\\pi+2k\\pi)}\\)。比较模与辐角得 \\(z=(2k+1)\\pi i\\;(k\\in\\mathbb Z)\\)。<strong>关键：</strong>不能漏去 \\(2k\\pi i\\)。</p></article>',
      exercises: '<details class="cl-exercise"><summary>基础：求 \u200b\\(\\operatorname{Log}(1+i)\\)</summary><p><strong>过程：</strong>\\(|1+i|=\\sqrt2,\\operatorname{Arg}(1+i)=\\pi/4\\)。<strong>答案：</strong>\\(\\frac12\\ln2+i\\pi/4\\)。</p></details><details class="cl-exercise"><summary>提高：为什么 \u200b\\(z^{1/2}\\) 有两值？</summary><p><strong>过程：</strong>辐角增加 \\(2\\pi\\) 后，半辐角增加 \\(\\pi\\)，根变为相反数。<strong>答案：</strong>非零 \\(z\\) 有两个不同平方根；取分支后才单值。</p></details>',
      mistakes: '<aside class="cl-warning"><strong>错误做法：</strong>把 \\(\\log z\\) 直接当作唯一主值。<br><strong>正确做法：</strong>先写多值表达式；仅在指定分支时使用 \\(\\operatorname{Log}\\)。</aside>',
      formula: '<tr><td>\\(\\log z=\\ln|z|+i(\\arg z+2k\\pi)\\)</td><td>\\(z\\ne0\\)</td><td>多值对数</td></tr><tr><td>\\(z^\\alpha=e^{\\alpha\\log z}\\)</td><td>需说明分支</td><td>复幂</td></tr>',
      summary: '<article class="cl-summary"><p><strong>必须理解：</strong>多值来自辐角多值。<br><strong>必须会做：</strong>指数方程、主值对数、简单复幂。<br><strong>易丢分：</strong>漏写 \\(2k\\pi i\\) 或不说明分支。</p></article>'
    },
    'complex-04-complex-integration.html': {
      intro: '从路径参数化到 Cauchy 积分公式；先检查解析性、路径方向和奇点位置，再计算。',
      concepts: '<h3>路径积分</h3><p>若 \\(C:z=z(t),a\\le t\\le b\\)，则 \u200b\\(\\int_Cf(z)dz=\\int_a^bf(z(t))z^{\\prime}(t)dt\\)。一般积分依赖路径；存在原函数时才路径无关。</p><h3>Cauchy 定理与公式</h3><p>若 \\(f\\) 在包含正向简单闭曲线及其内部的单连通区域内解析，则 \\(\\oint_Cf(z)dz=0\\)。若 \\(z_0\\) 在 \\(C\\) 内且余项解析，</p><div class="cl-formula">\\[f^{(n)}(z_0)=\\frac{n!}{2\\pi i}\\oint_C\\frac{f(\\zeta)}{(\\zeta-z_0)^{n+1}}d\\zeta.\\]</div><p>奇点落在路径上时不能直接套用；负向曲线结果变号。</p>',
      methods: '<article class="cl-card"><h3>Cauchy 公式模板</h3><ol><li>识别 \\((z-z_0)^{n+1}\\)。</li><li>确认 \\(z_0\\) 在内部，余下函数在曲线及内部解析。</li><li>乘 \\(2\\pi i/n!\\)；指数比导数阶数大 1。</li></ol></article>',
      examples: '<article class="cl-example"><h3>例题：高阶导数型</h3><p>\\(\\oint_{|z|=2}e^z/(z-i)^3\\,dz\\) 中 \\(i\\) 在圆内，取 \\(n=2\\)。</p><div class="cl-formula">\\[\\oint_{|z|=2}\\frac{e^z}{(z-i)^3}dz=\\frac{2\\pi i}{2!}e^i=\\pi i e^i.\\]</div></article>',
      exercises: '<details class="cl-exercise"><summary>基础：计算 \u200b\\(\\oint_{|z|=1}z^2dz\\)</summary><p><strong>思路：</strong>\\(z^2\\) 全平面解析。<strong>答案：</strong>0。<strong>易错点：</strong>闭路为零依赖解析条件。</p></details><details class="cl-exercise"><summary>提高：计算 \u200b\\(\\oint_{|z|=3}z^2/(z-1)dz\\)</summary><p><strong>过程：</strong>1 在圆内，余项 \\(f(z)=z^2\\)。<strong>答案：</strong>\\(2\\pi i\\)。</p></details>',
      mistakes: '<aside class="cl-warning"><strong>错误做法：</strong>曲线闭合就判积分为零。<br><strong>正确做法：</strong>还须检查曲线及内部无未处理奇点，且函数在相应区域解析。</aside>',
      formula: '<tr><td>\\(\\int_Cf\\,dz=\\int f(z(t))z^{\\prime}(t)dt\\)</td><td>路径可参数化</td><td>直接计算</td></tr><tr><td>Cauchy 高阶公式</td><td>中心在正向曲线内，余项解析</td><td>高阶极点型积分</td></tr>',
      summary: '<article class="cl-summary"><p><strong>必须理解：</strong>定理条件先于代入。<br><strong>必须会做：</strong>参数化、Cauchy 公式和高阶公式。<br><strong>易丢分：</strong>奇点在内/外/路径上的区别，和导数阶数。</p></article>'
    },
    'complex-05-series.html': {
      intro: '用收敛半径和收敛环域组织幂级数、Taylor 与 Laurent 展开，并据主要部判断奇点。',
      concepts: '<h3>幂级数与 Taylor 展开</h3><p>\\(\\sum a_n(z-z_0)^n\\) 在 \\(|z-z_0|&lt;R\\) 收敛，在 \\(|z-z_0|>R\\) 发散，边界需逐点判断。解析函数满足 \u200b\\(f(z)=\\sum f^{(n)}(z_0)(z-z_0)^n/n!\\)。</p><h3>Laurent 展开与奇点</h3><p>Laurent 级数的非负幂为正则部，负幂为主要部。主要部为零是可去奇点；有限个负幂是极点；无限个负幂是本性奇点。展开必须连同收敛环域一起写。</p>',
      methods: '<article class="cl-card"><h3>Laurent 展开步骤</h3><ol><li>围绕中心改写因式。</li><li>根据 \\(|w|&lt;1\\) 或 \\(|w|>1\\) 选择几何级数。</li><li>写出所有不等式的交集，并由主要部判奇点。</li></ol></article>',
      examples: '<article class="cl-example"><h3>例题：不同环域不同展开</h3><p>\\(\\frac1{z(z-1)}=-z^{-1}(1-z)^{-1}\\)。在 \\(0&lt;|z|&lt;1\\)，</p><div class="cl-formula">\\[\\frac1{z(z-1)}=-\\sum_{n=0}^{\\infty}z^{n-1}.\\]</div><p>在 \\(|z|>1\\)，应改写成 \\(z^{-2}(1-z^{-1})^{-1}\\)，得到 \\(\\sum_{n=0}^{\\infty}z^{-n-2}\\)。</p></article>',
      exercises: '<details class="cl-exercise"><summary>基础：\u200b\\(\\sum_{n=1}^\\infty nz^n\\) 的收敛半径</summary><p><strong>过程：</strong>\\(\\sqrt[n]{n}\\to1\\)。<strong>答案：</strong>\\(R=1\\)。<strong>易错点：</strong>边界还须判断，本题在 \\(|z|=1\\) 发散。</p></details><details class="cl-exercise"><summary>提高：\u200b\\(e^{1/z}\\) 在 0 的奇点类型</summary><p><strong>过程：</strong>\\(e^{1/z}=1+z^{-1}+z^{-2}/2!+\\cdots\\)，主要部无限。<strong>答案：</strong>本性奇点。</p></details>',
      mistakes: '<aside class="cl-warning"><strong>错误做法：</strong>只给 Laurent 级数，不写环域。<br><strong>正确做法：</strong>同一函数在不同环域可能有不同展开，环域是答案的一部分。</aside>',
      formula: '<tr><td>\\(1/(1-w)=\\sum_{n\\ge0}w^n\\)</td><td>\\(|w|&lt;1\\)</td><td>几何级数展开</td></tr><tr><td>Taylor 公式</td><td>函数在中心邻域解析</td><td>幂级数</td></tr>',
      summary: '<article class="cl-summary"><p><strong>必须会做：</strong>收敛半径、几何级数展开、奇点分类。<br><strong>易丢分：</strong>漏写收敛环域，把可去奇点误判为极点。</p></article>'
    },
    'complex-06-residues-applications.html': {
      intro: '把 Laurent 的 \\((z-z_0)^{-1}\\) 系数转化为留数计算模板，再以留数定理处理闭路积分。',
      concepts: '<h3>留数与计算公式</h3><p>留数是 Laurent 展开中 \\((z-z_0)^{-1}\\) 的系数。简单极点：\u200b\\(\\operatorname{Res}(f,z_0)=\\lim_{z\\to z_0}(z-z_0)f(z)\\)。\\(m\\) 阶极点：\u200b\\(\\operatorname{Res}=\\frac1{(m-1)!}\\lim\\frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^mf]\\)。</p><h3>留数定理</h3><p>函数在正向闭曲线内除有限个孤立奇点外解析，且路径上无奇点时，\u200b\\(\\oint_Cf(z)dz=2\\pi i\\sum\\operatorname{Res}(f,z_k)\\)，只累加曲线内部的奇点。</p>',
      methods: '<article class="cl-card"><h3>操作模板</h3><ol><li>列出奇点，判断阶数和是否位于路径内。</li><li>简单极点优先极限；高阶极点用导数；已有展开直接读 \\(z^{-1}\\) 系数。</li><li>相加后乘 \\(2\\pi i\\)，反向曲线整体变号。</li></ol></article>',
      examples: '<article class="cl-example"><h3>例题：留数定理</h3><p>\\(\\oint_{|z|=2}e^z/z^2\\,dz\\)。展开 \\(e^z/z^2=z^{-2}+z^{-1}+\\cdots\\)，0 点留数为 1，故积分为 \u200b\\(2\\pi i\\)。</p></article>',
      exercises: '<details class="cl-exercise"><summary>基础：求 \u200b\\(\\operatorname{Res}(e^z/z^2,0)\\)</summary><p><strong>答案：</strong>1；它是 \\(z^{-1}\\) 的系数。<strong>易错点：</strong>不是 \\(z^{-2}\\) 的系数。</p></details><details class="cl-exercise"><summary>提高：\u200b\\(\\oint_{|z|=3}z^2/[(z-1)(z+2)]dz\\)</summary><p><strong>过程：</strong>两留数为 \\(1/3,-4/3\\)，和为 -1。<strong>答案：</strong>\\(-2\\pi i\\)。</p></details>',
      mistakes: '<aside class="cl-warning"><strong>错误做法：</strong>把路径外或路径上的奇点也放进留数和。<br><strong>正确做法：</strong>仅加内部奇点；路径上有奇点时定理不能直接用。</aside>',
      formula: '<tr><td>\\(\\operatorname{Res}=\\lim(z-z_0)f\\)</td><td>简单极点</td><td>快速求留数</td></tr><tr><td>留数定理</td><td>路径无奇点、内仅有限孤立奇点</td><td>闭路积分</td></tr>',
      summary: '<article class="cl-summary"><p><strong>必须会做：</strong>按奇点类型选择留数方法并筛选内部奇点。<br><strong>易丢分：</strong>把最高负幂系数误作留数，遗漏方向。</p></article>'
    },
    'complex-07-conformal-mapping.html': {
      intro: '课程选学：用基本变换与分式线性变换理解局部保角和区域映射。',
      concepts: '<h3>保角与基本映射</h3><p>函数在 \\(z_0\\) 邻域解析且 \\(f^{\\prime}(z_0)\\ne0\\) 时在 \\(z_0\\) 保角。\\(w=z^n\\) 使辐角乘 \\(n\\)，但在整个平面通常不单射，需限制区域。</p><h3>分式线性变换</h3><div class="cl-formula">\\[w=\\frac{az+b}{cz+d},\\qquad ad-bc\\ne0.\\]</div><p>它把广义圆映为广义圆。做区域映射时先看边界，再取一个内部测试点决定像的哪一侧，并检查 \\(z=-d/c\\) 的极点。</p>',
      methods: '<article class="cl-card"><h3>边界映射步骤</h3><ol><li>求边界上三个特征点的像。</li><li>确定像边界是圆或直线。</li><li>代入一个内部点决定内外侧。</li><li>检查极点与单叶性。</li></ol></article>',
      examples: '<article class="cl-example"><h3>例题：上半平面到单位圆盘</h3><p>\\(w=(z-i)/(z+i)\\)。实轴上 \\(|x-i|=|x+i|\\)，故边界映为 \\(|w|=1\\)；内部点 \\(z=i\\) 映为 0，因此上半平面映为 \\(|w|&lt;1\\)。</p></article>',
      exercises: '<details class="cl-exercise"><summary>基础：\u200b\\(w=z^2\\) 在哪里不能由定理保证保角？</summary><p><strong>过程：</strong>\\(w^{\\prime}=2z\\)。<strong>答案：</strong>在 \\(z=0\\) 处导数为零，不能直接断言保角。</p></details><details class="cl-exercise"><summary>综合：为何边界像不足以确定区域像？</summary><p><strong>答案：</strong>同一边界有两侧；还要用区域内点确定映为圆内还是圆外。</p></details>',
      mistakes: '<aside class="cl-warning"><strong>错误做法：</strong>只看边界像就结束。<br><strong>正确做法：</strong>必须以内部测试点判定侧别，并检查映射极点。</aside>',
      formula: '<tr><td>解析且 \\(f^{\\prime}(z_0)\\ne0\\)</td><td>在 \\(z_0\\) 邻域解析</td><td>局部保角</td></tr><tr><td>\\((az+b)/(cz+d)\\)</td><td>\\(ad-bc\\ne0\\)</td><td>圆、直线映射</td></tr>',
      summary: '<article class="cl-summary"><p><strong>必须理解：</strong>保角是局部结论。<br><strong>必须会做：</strong>三点定边界、内点定侧别。<br><strong>易丢分：</strong>忽略极点或 \\(z^n\\) 的非单射性。</p></article>'
    }
  };

  const review = complexContent[complexPage];
  if (review) {
    const hero = root.querySelector('.cl-hero');
      hero.querySelector('.cl-kicker').textContent = '复变函数 · ⭐⭐⭐ 高频重点';
    hero.querySelector('p').textContent = review.intro;
    hero.querySelector('.cl-meta').innerHTML = '<span>概念、定理、例题与练习</span><span>·</span><span>章节内容已完善</span>';
    root.querySelector('#goals').querySelector('.cl-card').innerHTML = '<h3>学习目标</h3><p>掌握本章定义、定理条件与判定方法；完成“概念理解 → 例题 → 练习解析 → 易错点核对”的复习闭环。</p>';
    root.querySelector('#framework').querySelector('.cl-grid').innerHTML = '<article class="cl-card"><h3>概念与定理</h3><p>从定义出发，明确可使用结论的条件。</p></article><article class="cl-card"><h3>计算与应用</h3><p>按识别特征、选择方法、分步验算组织解题。</p></article>';
    root.querySelector('#concepts').innerHTML = '<h2>3. 核心知识点</h2>' + review.concepts;
    root.querySelector('#methods').innerHTML = '<h2>4. 常见题型</h2>' + review.methods;
    root.querySelector('#examples').innerHTML = '<h2>5. 典型例题</h2>' + review.examples;
    root.querySelector('#exercises').innerHTML = '<h2>6. 练习题</h2>' + review.exercises;
    root.querySelector('#mistakes').innerHTML = '<h2>7. 易错点</h2>' + review.mistakes;
    root.querySelector('#formulas tbody').innerHTML = review.formula;
    root.querySelector('#summary').innerHTML = '<h2>9. 本章总结</h2>' + review.summary;

    // 内容是在页面加载后注入的，确保 MathJax 对新增公式重新排版。
    const typesetComplexContent = () => {
      if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise([root]).catch(() => {});
      }
    };
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      typesetComplexContent();
    } else {
      window.addEventListener('load', typesetComplexContent, { once: true });
    }
  }

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
