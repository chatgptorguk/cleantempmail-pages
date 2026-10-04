(() => {
  const script = document.currentScript;
  const current = document.documentElement.lang === 'en' ? 'en' : 'zh';
  const query = new URLSearchParams(location.search).get('lang');
  const explicit = query === 'en' || query === 'zh' ? query : null;
  let preferred = explicit;
  try {
    if (explicit) localStorage.setItem('ctm-promo-language', explicit);
    else preferred = localStorage.getItem('ctm-promo-language');
  } catch (_) { /* Explicit language links work without local storage. */ }
  if ((preferred === 'en' || preferred === 'zh') && preferred !== current) {
    const path = script?.dataset[preferred];
    if (!path) return;
    const target = new URL(path, location.href);
    target.searchParams.set('lang', preferred);
    target.hash = location.hash;
    location.replace(target.href);
  }
})();
