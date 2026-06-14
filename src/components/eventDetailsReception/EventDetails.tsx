import Image from "next/image";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6533!3d-23.5605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt!2sbr!4v1234567891";

const details = [
  {
    label: "Horário",
    value: "19h00",
    sub: "Ínicio da festa",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-5 h-5"
        strokeWidth={1.1}
      >
        <circle cx="20" cy="20" r="12" stroke="#Fff" />
        <path
          d="M20 12v9l5 5"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Local",
    value: "Espaço Vila Verde",
    sub: "Av. Paulista, 1000 · São Paulo",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-5 h-5"
        strokeWidth={1.1}
      >
        <path
          d="M20 4C13.4 4 8 9.4 8 16C8 24.8 20 37 20 37C20 37 32 24.8 32 16C32 9.4 26.6 4 20 4Z"
          stroke="#fff"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="16" r="4.5" stroke="#fff" />
      </svg>
    ),
  },
  {
    label: "Traje",
    value: "Esporte fino",
    sub: "Tons neutros e pastéis",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-5 h-5"
        strokeWidth={1.1}
      >
        <path
          d="M20 20 L8 13 L8 27 Z"
          stroke="#fff"
          strokeLinejoin="round"
        />
        <path
          d="M20 20 L32 13 L32 27 Z"
          stroke="#fff"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="2.5" stroke="#fff" />
        <path
          d="M15 10 L20 15 L25 10"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  /* {
    label: "Música",
    value: "Banda ao vivo",
    sub: "Das 20h até a meia-noite",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-5 h-5"
        strokeWidth={1.1}
      >
        <path
          d="M16 30V14l18-4v16"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="30" r="4" stroke="#fff" />
        <circle cx="30" cy="26" r="4" stroke="#fff" />
      </svg>
    ),
  }, */
];

export default function Reception() {
  return (
    <section id="recepcao" className="w-full bg-white py-16 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto bg-married-main p-10 rounded-lg">
        {/* cabeçalho */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-stone-800 leading-tight font-casamento-cormorant">
            A <span className="italic text-married-light">recepção</span>
          </h2>
        </div>

        {/* grid principal — foto à esquerda, timeline à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* esquerda — foto + mapa */}
          <div className="flex flex-col gap-6">
            {/* foto do salão */}
            <div className="relative w-full h-56 lg:h-72 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/recantocasamento.jpg"
                alt="Espaço Vila Verde"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* overlay com nome do espaço */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-5">
                <p className="text-white text-sm font-casamento-cormorant font-light">
                  Espaço Vila Verde
                </p>
              </div>
            </div>

            {/* mapa embed */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-stone-200">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da recepção"
              />
            </div>

          </div>

          {/* direita — timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-married-light"
                strokeWidth={1}
              >
                <path
                  d="M8 2l1.5 4H5L8 2zM16 2l1.5 4H13L16 2z"
                  stroke="#Fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 6h14l-1 10H6L5 6z"
                  stroke="#Fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16v4M14 16v4M8 20h8"
                  stroke="#Fff"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs tracking-[0.3em] uppercase text-married-light font-casamento-relaway">
                Festa
              </span>
              <span className="flex-1 h-px bg-married-light" />
            </div>

            {/* timeline */}
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-married-light" />
              <div className="space-y-0">
                {details.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex gap-8 pb-10 last:pb-0 group"
                  >
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-married-second border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-500 group-hover:text-stone-600 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <span className="block text-base tracking-[0.25em] uppercase text-married-light mb-1.5 font-casamento-relaway">
                        {item.label}
                      </span>
                      <span className="block text-base font-light text-married-black leading-snug font-casamento-dm">
                        {item.value}
                      </span>
                      <span className="block text-base text-married-light mt-0.5 font-casamento-relaway">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
