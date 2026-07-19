import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { saveGiftReservation } from "@/app/actions/gifts";
import { IGift } from "./ListGifts";
import pixQrCode from "../../../public/images/qrcoderafapixnovo-cropped.jpeg";

const PIX_PHONE =
  "00020126360014br.gov.bcb.pix0114+55379919915985204000053039865802BR5923RAFAELA_AMARAL_DA_SILVA6005Moema610935604-00062290525A4LN261781111784046517539630414CD";

export function Modal({
  presente,
  onClose,
  onGiftReserved,
}: {
  presente: IGift;
  onClose: () => void;
  onGiftReserved?: (giftId: string) => void;
}) {
  const [copiado, setCopiado] = useState(false);
  const [giverName, setGiverName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function copiar() {
    if (presente.type !== "pix") return;

    navigator.clipboard.writeText(PIX_PHONE);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  }

  async function confirmPhysicalGift() {
    if (presente.type !== "physical") return;

    const trimmedName = giverName.trim();

    if (!trimmedName) {
      setError("Informe seu nome para confirmar o presente.");
      return;
    }

    try {
      setIsSaving(true);
      setError("");
      await saveGiftReservation({
        giftId: presente.id,
        giftTitle: presente.titulo,
        giverName: trimmedName,
        storeName: presente.storeName,
        productUrl: presente.link,
      });
      setSuccess(true);
      onGiftReserved?.(presente.id);
    } catch {
      setError("Este presente pode ter acabado de ser escolhido. Atualize a página e tente outro item.");
    } finally {
      setIsSaving(false);
    }
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full sm:max-w-md max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-stone-300 hover:text-stone-600 transition-colors text-base leading-none"
          aria-label="Fechar"
        >
          x
        </button>

        <div className="mb-5">
          <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-1">
            presente
          </p>
          <h3 className="text-xl font-light text-stone-800 pr-6">
            {presente.titulo}
          </h3>
          <p className="text-lg font-light text-stone-500 mt-1">
            {presente.valor}
          </p>
          <p className="text-sm font-light leading-relaxed text-stone-500 mt-3">
            {presente.descricao}
          </p>
        </div>

        {presente.type === "physical" ? (
          <div className="space-y-4">
            <div className="border border-stone-200 rounded-lg p-4 text-sm text-stone-600 space-y-1.5">
              <p className="text-xs tracking-[0.2em] uppercase text-stone-400">
                dados para entrega ou retirada
              </p>
              <p>Rafaela Amaral Silva</p>
              <p>Rua Mato Grosso, número 1435, ap 404</p>
              <p>Divinópolis - MG</p>
            </div>

            {!success ? (
              <div className="border-t border-stone-100 pt-4">
                <label className="block text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">
                  seu nome
                </label>
                <input
                  value={giverName}
                  onChange={(event) => setGiverName(event.target.value)}
                  placeholder="Nome de quem vai presentear"
                  className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-700 outline-none focus:border-stone-500"
                />
                {error && (
                  <p className="mt-3 text-xs text-red-500 leading-relaxed">
                    {error}
                  </p>
                )}
                <button
                  onClick={confirmPhysicalGift}
                  disabled={isSaving}
                  className="mt-4 w-full py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 border border-stone-800 bg-stone-800 text-white hover:bg-transparent hover:text-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? "Confirmando..." : "Confirmar presente"}
                </button>
                <a
                  href={presente.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full py-3 text-center text-xs tracking-[0.2em] uppercase transition-all duration-300 border border-stone-300 text-stone-600 hover:bg-stone-800 hover:text-white hover:border-stone-800"
                >
                  Abrir {presente.storeName}
                </a>
              </div>
            ) : (
              <div className="text-center border border-married-main rounded-lg p-5">
                <p className="text-sm text-stone-600">
                  Presente confirmado. Obrigado por avisar a Rafaela e o Vinicius.
                </p>
              </div>
            )}
          </div>
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
              <span className="text-xs text-stone-300">ou copie o número</span>
              <span className="flex-1 h-px bg-stone-100" />
            </div>

            <div className="bg-stone-50 px-4 py-3 rounded-lg mb-4 text-center overflow-hidden">
              <p className="text-sm text-stone-500 font-light leading-relaxed select-all break-all">
                {PIX_PHONE}
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
              {copiado ? "Copiado" : "Copiar número PIX"}
            </button>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
