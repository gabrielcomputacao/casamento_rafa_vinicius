import Image from "next/image";

// 👇 Cole aqui o link do Google Maps do local da cerimônia
const MAPS_URL = "https://maps.google.com/?q=Igreja+São+Francisco+São+Paulo";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt!2sbr!4v1234567890";

const details = [
  {
    label: "Data",
    value: "26 de Setembro",
    sub: "2026 · Domingo",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-5 h-5"
        strokeWidth={1.1}
      >
        <rect x="5" y="8" width="30" height="27" rx="4" stroke="currentColor" />
        <path d="M5 16h30" stroke="currentColor" strokeLinecap="round" />
        <path d="M13 5v6M27 5v6" stroke="currentColor" strokeLinecap="round" />
        <path
          d="M20 30 C20 30 13 25 13 21 C13 18.8 14.8 17 17 17 C18.2 17 19.3 17.6 20 18.5 C20.7 17.6 21.8 17 23 17 C25.2 17 27 18.8 27 21 C27 25 20 30 20 30Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Horário",
    value: "17h00",
    sub: "Pontualmente",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-5 h-5"
        strokeWidth={1.1}
      >
        <circle cx="20" cy="20" r="12" stroke="currentColor" />
        <path
          d="M20 12v9l5 5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Local",
    value: "Igreja São Francisco",
    sub: "Rua das Flores, 320 · São Paulo",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-5 h-5"
        strokeWidth={1.1}
      >
        <path
          d="M20 4C13.4 4 8 9.4 8 16C8 24.8 20 37 20 37C20 37 32 24.8 32 16C32 9.4 26.6 4 20 4Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="16" r="4.5" stroke="currentColor" />
      </svg>
    ),
  },
];

export default function EventDetails() {
  return (
    <section
      id="detalhes"
      className="w-full bg-married-main py-16 lg:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg">
        {/* cabeçalho */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-married-second leading-tight font-casamento-cormorant">
            A <span className="italic text-married-base">cerimônia</span>
          </h2>
        </div>

        {/* grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* esquerda — timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-married-second"
                strokeWidth={1}
              >
                <path
                  d="M12 2v3M9 5h6M5 22V12a7 7 0 0114 0v10M5 22h14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs tracking-[0.3em] uppercase text-married-second font-casamento-relaway">
                Igreja
              </span>
              <span className="flex-1 h-px bg-married-base" />
            </div>

            {/* timeline */}
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-married-base" />
              <div className="space-y-0">
                {details.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex gap-8 pb-10 last:pb-0 group"
                  >
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-white border border-married-base flex items-center justify-center text-stone-400 group-hover:border-married-second group-hover:text-stone-600 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <span className="block text-base tracking-[0.25em] uppercase text-married-second mb-1.5 font-casamento-relaway">
                        {item.label}
                      </span>
                      <span className="block text-lg font-light text-married-second leading-snug font-casamento-dm">
                        {item.value}
                      </span>
                      <span className="block text-sm text-married-second mt-0.5 font-casamento-inter">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* direita — foto + mapa */}
          <div className="flex flex-col gap-6">
            {/* foto do local */}
            <div className="relative w-full h-56 lg:h-72 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/anabruno/images/igreja2.jpg"
                alt="Igreja São Francisco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* mapa embed */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-stone-100">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da cerimônia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
