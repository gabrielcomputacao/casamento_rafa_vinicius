import Image from "next/image";
import casalFoto from "../../../public/images/casal/rafacasal10.jpeg";

export default function OurStory() {
  return (
    <section id="historia" className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="flex flex-col items-end justify-center px-10 py-10 lg:py-20 lg:pr-20 xl:pr-28 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-end gap-3 mb-8 w-full">
          <div className="flex items-center gap-3 ">
            <span className="h-px w-8 bg-casatext-casamento-cinza hidden lg:block" />
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-married-three text-center lg:text-right w-full font-casamento-play">
              nossa história
            </span>
          </div>
        </div>

        <h2 className="italic text-5xl xl:text-5xl font-light text-married-three leading-[1.08] mb-10 w-full text-center lg:text-right font-casamento-cormorant">
          Como tudo <span className=" text-married-main">começou</span>
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
      </div>

      <div className="flex items-center justify-center px-10 py-10 lg:py-16 lg:px-12 bg-white">
        <div className="relative w-full max-w-md lg:max-w-sm xl:max-w-md">
          <div className="hidden lg:block absolute -inset-6 rounded-[2.5rem] border border-married-main/60" />
          <div className="hidden lg:block absolute -inset-3 rounded-[2rem] border border-married-three/35" />
          <Image
            src={casalFoto}
            alt="Foto do casal"
            className="relative w-full h-auto rounded-2xl lg:rounded-[1.5rem] shadow-md lg:shadow-[0_30px_70px_-25px_rgba(149,129,90,0.45)]"
            sizes="(max-width: 1024px) 100vw, 480px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
