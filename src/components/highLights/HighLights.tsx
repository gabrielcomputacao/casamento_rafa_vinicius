
export default function Highlights() {
  const items = [
    {
      label: "Cerimônia",
      description:
        "Uma celebração íntima e emocionante.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" strokeWidth={1.2}>
          {/* church / chapel */}
          <path d="M24 4 L24 12" stroke="currentColor" strokeLinecap="round" />
          <path d="M20 8 L28 8" stroke="currentColor" strokeLinecap="round" />
          <path d="M10 44 L10 22 Q10 18 14 18 L34 18 Q38 18 38 22 L38 44" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 44 L38 44" stroke="currentColor" strokeLinecap="round" />
          <rect x="20" y="30" width="8" height="14" rx="4" stroke="currentColor" />
          <path d="M14 18 L24 12 L34 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Alianças",
      description:
        "Dois anéis que simbolizam a promessa de uma vida.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" strokeWidth={1.2}>
          {/* two rings interlinked */}
          <circle cx="18" cy="26" r="10" stroke="currentColor" />
          <circle cx="30" cy="26" r="10" stroke="currentColor" />
          {/* highlight arcs to suggest volume */}
          <path d="M11 20 Q14 16 18 16" stroke="currentColor" strokeLinecap="round" opacity="0.4" />
          <path d="M23 20 Q26 16 30 16" stroke="currentColor" strokeLinecap="round" opacity="0.4" />
        </svg>
      ),
    },
    {
      label: "Recepção",
      description:
        "Uma festa com música, dança e muita alegria.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" strokeWidth={1.2}>
          {/* clinking glasses / champagne */}
          <path d="M16 8 L12 28 Q12 34 18 34 Q24 34 24 28 L20 8 Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M32 8 L28 28 Q28 34 34 34 Q40 34 40 28 L36 8 Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M18 34 L18 42" stroke="currentColor" strokeLinecap="round" />
          <path d="M34 34 L34 42" stroke="currentColor" strokeLinecap="round" />
          <path d="M14 42 L22 42" stroke="currentColor" strokeLinecap="round" />
          <path d="M30 42 L38 42" stroke="currentColor" strokeLinecap="round" />
          {/* bubbles */}
          <circle cx="17" cy="20" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="19" cy="14" r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="33" cy="18" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="35" cy="12" r="0.8" fill="currentColor" opacity="0.4" />
          {/* clink lines */}
          <path d="M23 10 L25 8" stroke="currentColor" strokeLinecap="round" opacity="0.6" />
          <path d="M24 13 L27 12" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full  py-8 px-6 bg-casamento-rosa">
      <div className="max-w-6xl mx-auto">

        {/* cabeçalho */}
        <div className="text-center mb-0">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block h-px w-8 bg-casamento-cinza" />
            <span className="text-base font-medium tracking-[0.3em] uppercase text-casamento-cinza font-casamento-play">
              o grande dia
            </span>
            <span className="block h-px w-8 bg-casamento-cinza" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-casamento-offblack leading-snug font-casamento-cormorant">
            Um dia para <span className="italic text-casamento-cinza">sempre se lembrar</span>
          </h2>
        </div>

        {/* cards */}
        <div className="flex flex-col md:flex-row ">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-1 flex flex-row items-center gap-8 px-10 py-6 sm:py-12 group"
            >
              {/* ícone */}
              <div className="shrink-0 text-casamento-cinza transition-colors duration-300 group-hover:text-stone-700">
                {item.icon}
              </div>

              {/* divisor vertical */}
              <div className="shrink-0 w-px h-12 bg-casamento-cinza" />

              {/* texto */}
              <div className="space-y-2">
                <h3 className="text-sm tracking-[0.15em] uppercase text-casamento-offblack font-base font-casamento-relaway">
                  {item.label}
                </h3>
                <p className="text-base leading-loose text-casamento-cinza font-casamento-relaway">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}