interface HeroProps {
  type: "image" | "video";
  src: string;
  noiva?: string;
  noivo?: string;
}

export default function HeroSection({ type, src, noiva, noivo }: HeroProps) {
  return (
    <section className="relative w-full h-150 overflow-hidden">
      {/* Container do Conteúdo Visual */}
      <div className="absolute inset-0 w-full h-full">
        {type === "video" ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[50%_35%] md:object-[20%_42%]"
          />
        ) : (
          <img
            src={src}
            alt="Momento especial do casal"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Overlay Escuro (ajuda na leitura do texto sobre o vídeo/imagem) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50 flex items-center justify-center">
        {noiva && noivo && (
          <h1 className="text-white text-6xl md:text-8xl text-center px-4 drop-shadow-lg font-casamento-peristiwa leading-tight">
            {noiva}
            <br />
            <span className="text-4xl md:text-6xl font-casamento-parisienne">&</span>
            <br />
            {noivo}
          </h1>
        )}
      </div>
    </section>
  );
}
