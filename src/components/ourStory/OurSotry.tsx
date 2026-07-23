import Image from "next/image";
import casalFoto from "../../../public/images/casal/rafacasal10.jpeg";
import casalFotoEsquerda from "../../../public/images/casal/rafacasal17.jpeg";
import casalFotoDireita from "../../../public/images/casal/rafacasal16.jpeg";
import OurStoryCarousel from "./OurStoryCarousel";

export default function OurStory() {
  return (
    <section id="historia" className="w-full bg-white py-16 lg:py-18">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 bg-married-three" />
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-married-three text-center font-casamento-play">
            nossa história
          </span>
          <span className="h-px w-8 bg-married-three" />
        </div>

        <h2 className="italic text-5xl xl:text-5xl font-light text-married-three leading-[1.08] mb-10 w-full text-center font-casamento-cormorant">
          Como tudo <span className=" text-married-main">começou</span>
        </h2>

        <div className="space-y-5 w-full font-casamento-relaway text-center lg:text-justify mb-12 lg:mb-16">
          <p className="text-lg leading-loose text-stone-500 font-light">
            Era mais um dia de trabalho, mais uma manhã de atendimentos
            intensos, até que, por um instante, dois olhares se cruzaram. Vieram
            muitos encontros entre plantões e corredores, onde o tempo era
            sempre escasso. Aos poucos, fomos nos conhecendo entre discussões de
            casos clínicos, desafios diários e muito trabalho. Assim, de forma
            leve e natural, o amor nasceu e cresceu. Naquele momento, tivemos a
            certeza de que era esse olhar que desejaríamos encontrar todos os
            dias pelo resto da vida.
          </p>
          <p className="text-lg leading-loose text-stone-500 font-light">
            O primeiro jantar fez valer toda a espera. Entre conversas, risadas
            e olhares, percebemos que algumas horas jamais seriam suficientes.
            Quando veio o primeiro beijo, o tempo pareceu parar, transformando a
            expectativa em um instante inesquecível de carinho, cumplicidade e
            amor. O namoro começou de forma intensa e natural. Descobrimos que
            compartilhávamos os mesmos sonhos, valores e o desejo de construir
            uma vida juntos. A primeira viagem deu início a muitas aventuras e
            nos mostrou que o melhor destino sempre seria estarmos lado a lado.
          </p>

          <p className="text-lg leading-loose text-stone-500 font-light">
            Então chegou a viagem dos sonhos. Conhecemos novas culturas,
            paisagens e experiências que fortaleceram ainda mais nossa história.
            E foi na cidade do amor que vivemos o capítulo mais especial:
            durante um jantar no Rio Sena, sob o brilho da Torre Eiffel, veio o
            pedido de casamento. Entre lágrimas de felicidade, um “sim”
            emocionado e um brinde com champanhe, celebramos o início do nosso
            para sempre.
          </p>
          <p className="text-lg leading-loose text-stone-500 font-light">
            Agora, com o coração transbordando de gratidão e felicidade, chegou
            o momento de escrever o capítulo mais importante da nossa história.
            E ele só estará completo com a presença das pessoas que fizeram
            parte da nossa caminhada. Será uma imensa alegria ter você ao nosso
            lado para celebrar o nosso amor, compartilhar esse momento
            inesquecível e brindar conosco o início de uma nova família.
            Esperamos por você para viver esse dia tão sonhado e especial.
          </p>
        </div>

        {/* desktop: três fotos lado a lado, com a foto atual centralizada */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-center">
          <div className="relative w-full">
            <Image
              src={casalFotoEsquerda}
              alt="Foto do casal"
              className="relative w-full h-auto rounded-2xl lg:rounded-[1.5rem] shadow-md lg:shadow-[0_30px_70px_-25px_rgba(149,129,90,0.45)]"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
          </div>

          <div className="relative w-full max-w-md mx-auto aspect-[427/640]">
            <Image
              src={casalFoto}
              alt="Foto do casal"
              fill
              className="object-cover rounded-2xl lg:rounded-[1.5rem] shadow-md lg:shadow-[0_30px_70px_-25px_rgba(149,129,90,0.45)]"
              sizes="(max-width: 1024px) 100vw, 30vw"
              priority
            />
          </div>

          <div className="relative w-full">
            <Image
              src={casalFotoDireita}
              alt="Foto do casal"
              className="relative w-full h-auto rounded-2xl lg:rounded-[1.5rem] shadow-md lg:shadow-[0_30px_70px_-25px_rgba(149,129,90,0.45)]"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
          </div>
        </div>

        {/* mobile: carrossel dedicado com as três fotos */}
        <div className="lg:hidden">
          <OurStoryCarousel />
        </div>
      </div>
    </section>
  );
}
