import Image from "next/image";

export default function OurStory() {
  return (
    <section id="historia" className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="flex flex-col items-end justify-center px-10 py-10 lg:py-20 lg:pr-20 xl:pr-28 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-end gap-3 mb-8 w-full">
          <div className="flex items-center gap-3 ">
            <span className="h-px w-8 bg-casatext-casamento-cinza hidden lg:block" />
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-married-main text-center lg:text-right w-full font-casamento-play">
              nossa história
            </span>
          </div>
        </div>

        <h2 className="italic text-5xl xl:text-5xl font-light text-married-second leading-[1.08] mb-10 w-full text-center lg:text-right font-casamento-cormorant">
          Como tudo <span className=" text-married-base">começou</span>
        </h2>

        <div className="space-y-5 w-full lg:max-w-sm font-casamento-relaway">
          <p className="text-lg leading-loose text-stone-500 font-light">
            Era uma tarde comum quando nossos olhos se encontraram pela primeira
            vez. Nenhum dos dois sabia que aquele momento mudaria tudo — mas o
            coração sente o que a mente ainda não entende.
          </p>
          <p className="text-lg leading-loose text-stone-500 font-light">
            Desde a primeira conversa, algo ficou diferente. Uma leveza, uma
            cumplicidade que só cresce com o tempo e nos faz ter certeza de que
            estamos no lugar certo.
          </p>
          <p className="text-lg leading-loose text-stone-500 font-light">
            Anos depois, aqui estamos — prontos para dizer sim diante de todos
            que amamos.
          </p>
        </div>

        <p className="mt-14 text-base tracking-[0.25em] uppercase text-married-second text-center lg:text-right w-full font-casamento-dm">
          Juntos desde 2020
        </p>
      </div>

      <div className="relative min-h-[40vh] lg:min-h-0">
        <Image
          //src="anabruno/images/casalcasando1.jpg"
          src="/anabruno/images/casalcasando1.jpg"
          alt="Foto do casal"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent" />
      </div>
    </section>
  );
}
