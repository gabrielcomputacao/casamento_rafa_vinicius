const VIDEO_SRC = encodeURI("/videos/Pré Wedding Rafaela e Vini 4k.mp4");

export default function PreWeddingVideo() {
  return (
    <section id="pre-wedding" className="w-full bg-white py-10 sm:py-16 lg:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* cabeçalho */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-married-three" />
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-married-three font-casamento-play">
              pré-wedding
            </span>
            <span className="h-px w-8 bg-married-three" />
          </div>
          <h2 className="italic text-4xl lg:text-5xl font-light text-married-four leading-tight font-casamento-cormorant">
            Um instante do nosso <span className="text-married-main">amor</span>
          </h2>
        </div>

        {/* vídeo */}
        <div className="relative w-full rounded-2xl lg:rounded-[1.75rem] overflow-hidden shadow-[0_30px_70px_-25px_rgba(149,129,90,0.45)]">
          <video
            src={VIDEO_SRC}
            controls
            playsInline
            className="w-full h-auto aspect-video"
          />
        </div>
      </div>
    </section>
  );
}
