import GifListMobileAlt from "@/src/components/giftList/GiftListMobileAlt";

export const metadata = {
  title: "Prévia: lista de presentes (2 colunas no mobile)",
};

export default function MobileGiftsPreviewPage() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-married-second py-4 px-6 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-married-four font-casamento-relaway">
          Página de teste — versão alternativa da lista de presentes (2 cards por linha no mobile).
          O layout original não foi alterado.
        </p>
      </div>
      <GifListMobileAlt />
    </div>
  );
}
