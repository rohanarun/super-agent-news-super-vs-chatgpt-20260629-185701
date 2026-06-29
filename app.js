(function () {
  // Guarded GSAP animation
  function initAnimations() {
    if (typeof window.gsap === 'undefined') return;
    gsap.from('.hero-content', { opacity: 0, y: 24, duration: 0.8 });
    gsap.from('.tile', {
      opacity: 0,
      y: 16,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.bento',
        start: 'top 80%'
      }
    });
  }

  if (document.readyState === 'complete') {
    initAnimations();
  } else {
    window.addEventListener('load', initAnimations);
  }
})();