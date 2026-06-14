"use client";

import { useState } from "react";
import Image from "next/image";
import { IGift, listGifts } from "./ListGifts";
import { Modal } from "./modalPixGift";

export default function GifList() {
  const [selecionado, setSelecionado] = useState<IGift | null>(null);

  return (
    <>
      <section id="list" className="w-full bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="italic text-4xl lg:text-5xl font-light text-married-three leading-tight font-casamento-cormorant text-center">
              Lista de <span className="text-married-main">presentes</span>
            </h2>
            <p className="mt-4 text-center text-married-four font-light font-casamento-relaway text-lg">
              Sua presença é o nosso maior presente, mas, ainda assim, separamos com carinho algumas opções para quem desejar nos presentear.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {listGifts.map((gift) => (
              <div
                key={gift.id}
                className="bg-white group flex flex-col border border-married-second rounded-b-lg"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={gift.foto}
                    alt={gift.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-light text-married-four leading-snug font-casamento-cormorant">
                      {gift.titulo}
                    </h3>
                    <span className="shrink-0 text-sm font-light text-married-four font-casamento-dm">
                      {gift.valor}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-married-four/75 font-casamento-relaway">
                    {gift.descricao}
                  </p>
                  <button
                    onClick={() => setSelecionado(gift)}
                    className="cursor-pointer font-casamento-relaway mt-auto w-full py-2.5 text-xs tracking-[0.2em] uppercase border border-stone-200 text-married-four hover:bg-married-four hover:text-white hover:border-married-bg-married-four transition-all duration-300"
                  >
                    {gift.link ? "Presentear com o item" : "Presentear via PIX"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selecionado && (
        <Modal presente={selecionado} onClose={() => setSelecionado(null)} />
      )}
    </>
  );
}
