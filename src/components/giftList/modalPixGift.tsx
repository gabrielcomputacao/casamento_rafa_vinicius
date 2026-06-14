import Image from "next/image";
import { useState } from "react";
import { IGift } from "./ListGifts";
import pixQrCode from "../../../public/images/pixqrcode.png";

export function Modal({
  presente,
  onClose,
}: {
  presente: IGift;
  onClose: () => void;
}) {
  const [copiado, setCopiado] = useState(false);

  function copiar() {
    if (!presente.pix) return;

    navigator.clipboard.writeText(presente.pix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-stone-300 hover:text-stone-600 transition-colors text-base leading-none"
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="mb-6">
          <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-1">
            presente
          </p>
          <h3 className="text-xl font-light text-stone-800">
            {presente.titulo}
          </h3>
          <p className="text-lg font-light text-stone-500 mt-1">
            {presente.valor}
          </p>
          <p className="text-sm font-light leading-relaxed text-stone-500 mt-3">
            {presente.descricao}
          </p>
        </div>

        {presente.link ? (
          <>
            <div className="relative aspect-4/3 overflow-hidden rounded-lg mb-6">
              <Image
                src={presente.foto}
                alt={presente.titulo}
                fill
                className="object-cover"
              />
            </div>
            <a
              href={presente.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center text-xs tracking-[0.2em] uppercase transition-all duration-300 border border-stone-300 text-stone-600 hover:bg-stone-800 hover:text-white hover:border-stone-800"
            >
              Presentear com este item
            </a>
          </>
        ) : (
          <>
            <div className="mb-6 text-center">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">
                QR Code PIX
              </p>
              <Image
                src={pixQrCode}
                alt="QR Code PIX"
                width={180}
                height={180}
                className="rounded-lg mx-auto"
              />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="flex-1 h-px bg-stone-100" />
              <span className="text-xs text-stone-300">ou copie o código</span>
              <span className="flex-1 h-px bg-stone-100" />
            </div>

            <div className="bg-stone-50 px-4 py-3 rounded-lg mb-4">
              <p className="text-xs text-stone-400 font-light break-all leading-relaxed select-all">
                {presente.pix}
              </p>
            </div>

            <button
              onClick={copiar}
              className={`w-full py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                copiado
                  ? "bg-stone-800 text-white border-stone-800"
                  : "border-stone-300 text-stone-600 hover:bg-stone-800 hover:text-white hover:border-stone-800"
              }`}
            >
              {copiado ? "Copiado ✓" : "Copiar código PIX"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
