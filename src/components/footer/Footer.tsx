import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-married-three pt-16 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-center sm:justify-between flex-wrap gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start ">
            <Link
              href="/"
              className="text-4xl font-bold text-married-light mb-4 font-casamento-cormorant "
            >
              Rafaela{" "}
              <span className="text-married-four font-casamento-play">&</span>{" "}
              Vinicius
            </Link>
           {/*  <p className="text-married-light font-medium tracking-widest text-sm uppercase ">
              #RafaelaEVinicius2026
            </p> */}
          </div>

          <div className="md:text-right w-full sm:w-4/10">
            {/* <h3 className="text-gray-900 font-bold mb-4 uppercase  tracking-[0.2em] text-center sm:text-left font-casamento-cormorant">Um recado para você</h3> */}
            <p className="text-married-light  text-lg leading-relaxed text-center sm:text-left font-casamento-cormorant">
              &ldquo;A nossa felicidade só será completa com a sua presença. Estamos
              ansiosos para celebrar esse novo capítulo com as pessoas que mais
              amamos.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
