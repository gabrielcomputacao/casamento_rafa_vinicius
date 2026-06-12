export function useSmoothScroll(duration = 1500) {
  function scrollTo(id: string) {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY - 80; // 80 = altura do header
    const distance = end - start;
    let startTime: number | null = null;

    // easing — começa devagar, acelera, termina devagar
    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  return { scrollTo };
}