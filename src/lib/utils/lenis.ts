import Lenis from '@studio-freight/lenis';

let lenis: Lenis | null = null;
let listeners: ((scroll: number) => void)[] = [];

export function initLenis(): Lenis {
  if (lenis) return lenis;

  lenis = new Lenis({
    lerp: 0.08,
    smooth: true,
  });

  lenis.on('scroll', ({ scroll }) => {
    listeners.forEach((cb) => cb(scroll));
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
}

export function onLenisScroll(cb: (scroll: number) => void) {
  listeners.push(cb);
}