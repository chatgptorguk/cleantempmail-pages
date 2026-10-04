(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const sections = [...document.querySelectorAll('.feature,.platform-card,.guide-card,.plan-card,.section-heading,.steps article,.faq-section,.quota-estimator,.article-section')];
  let observer;
  function reveal() {
    observer?.disconnect();
    if (reduce.matches || !('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('motion-enabled');
      return;
    }
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('seen'); observer.unobserve(entry.target); }
      });
    }, { threshold: .08 });
    sections.forEach((section, i) => {
      section.classList.add('reveal');
      section.style.setProperty('--reveal-delay', `${i % 3 * 65}ms`);
      observer.observe(section);
    });
    document.documentElement.classList.add('motion-enabled');
  }
  reveal();
  reduce.addEventListener('change', reveal);
  let queued = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    document.querySelector('.reading-progress')?.style.setProperty('--progress', max > 0 ? String(scrollY / max) : '0');
    document.body.classList.toggle('is-scrolled', scrollY > 350);
    queued = false;
  };
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(updateProgress); } }, { passive: true });
  addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.feature,.platform-card,.guide-card,.plan-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        if (reduce.matches) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }, { passive: true });
    });
  }
  document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => { link.closest('details').open = false; }));
  const form = document.querySelector('.quota-form');
  if (form) {
    form.addEventListener('submit', e => e.preventDefault());
    const result = document.querySelector('#quota-result');
    const update = () => {
      const runs = Number(form.elements.runs.value);
      if (!Number.isInteger(runs) || runs < 1 || runs > 10000) {
        result.textContent = document.documentElement.lang === 'en' ? 'Enter 1–10,000' : '请输入 1–10,000';
        return;
      }
      const polls = Math.ceil(Number(form.elements.window.value) / Number(form.elements.interval.value));
      result.textContent = new Intl.NumberFormat(document.documentElement.lang).format(runs * (polls + 3));
    };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    update();
  }
})();
