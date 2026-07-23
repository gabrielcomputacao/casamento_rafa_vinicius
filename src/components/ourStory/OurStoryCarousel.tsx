"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";

const AUTOPLAY_MS = 4200;
const SLIDE_TRANSITION = "1300ms cubic-bezier(0.16,1,0.3,1)";

const photos = [
  { src: "/images/casal/rafacasal17.jpeg", alt: "Foto do casal" },
  { src: "/images/casal/rafacasal10.jpeg", alt: "Foto do casal" },
  { src: "/images/casal/rafacasal16.jpeg", alt: "Foto do casal" },
];

export default function OurStoryCarousel() {
  const total = photos.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const directionRef = useRef<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (target: number) => {
      const clamped = Math.max(0, Math.min(total - 1, target));
      setIndex((current) => {
        if (clamped > current) directionRef.current = 1;
        else if (clamped < current) directionRef.current = -1;
        return clamped;
      });
    },
    [total],
  );

  useEffect(() => {
    if (isPaused) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => {
        let dir = directionRef.current;
        let next = current + dir;
        if (next < 0 || next > total - 1) {
          dir = dir === 1 ? -1 : 1;
          directionRef.current = dir;
          next = current + dir;
        }
        return next;
      });
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) {
      goTo(index + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  }

  return (
    <div
      className="group relative w-full select-none [--slide-w:74vw] sm:[--slide-w:46vw]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full overflow-hidden py-4">
        <div
          className="flex items-center gap-4"
          style={{
            transform: `translateX(calc(50% - (var(--slide-w) / 2) - (${index} * (var(--slide-w) + 1rem))))`,
            transition: `transform ${SLIDE_TRANSITION}`,
          }}
        >
          {photos.map((photo, i) => {
            const isActive = i === index;
            return (
              <div
                key={photo.src}
                className={`relative shrink-0 aspect-4/5 rounded-xl overflow-hidden transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-[1300ms] ${
                  isActive
                    ? "scale-100 opacity-100 z-10 shadow-[0_25px_60px_-20px_rgba(149,129,90,0.45)]"
                    : "scale-[0.78] opacity-40 z-0 shadow-none brightness-95"
                }`}
                style={{ width: "var(--slide-w)" }}
                aria-hidden={!isActive}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 74vw, 46vw"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* setas */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Foto anterior"
        disabled={index === 0}
        className="cursor-pointer hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm text-married-four opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out hover:bg-white disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" strokeWidth={1.4}>
          <path d="M15 5L8 12l7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Próxima foto"
        disabled={index === total - 1}
        className="cursor-pointer hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm text-married-four opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out hover:bg-white disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" strokeWidth={1.4}>
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* indicadores */}
      <div className="flex items-center justify-center gap-2.5 mt-4">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para a foto ${i + 1}`}
            className={`cursor-pointer h-1.5 rounded-full transition-all duration-700 ease-out ${
              i === index ? "w-8 bg-married-three" : "w-1.5 bg-married-three/30 hover:bg-married-three/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
