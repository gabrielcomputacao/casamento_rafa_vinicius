"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { getGiftReservations } from "@/app/actions/gifts";
import { IGift, IPhysicalGift, physicalGifts, pixGifts } from "./ListGifts";
import { Modal } from "./modalPixGift";

function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function GifList() {
  const [selecionado, setSelecionado] = useState<IGift | null>(null);
  const [reservedGiftIds, setReservedGiftIds] = useState<string[]>([]);

  useEffect(() => {
    async function loadReservedGifts() {
      try {
        const reservations = await getGiftReservations();
        setReservedGiftIds(reservations.map((reservation) => reservation.gift_id));
      } catch {
        setReservedGiftIds([]);
      }
    }

    loadReservedGifts();
  }, []);

  const reservedSet = useMemo(
    () => new Set(reservedGiftIds),
    [reservedGiftIds],
  );

  function handleGiftReserved(giftId: string) {
    setReservedGiftIds((current) =>
      current.includes(giftId) ? current : [...current, giftId],
    );
  }

  return (
    <>
      <section id="list" className="w-full bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="italic text-4xl lg:text-5xl font-light text-married-three leading-tight font-casamento-cormorant text-center">
              Presenteando <span className="text-married-main">momentos</span>
            </h2>
            <p className="mt-4 text-center text-married-four font-light font-casamento-relaway text-lg">
              Sua presença é o nosso maior presente, mas separamos algumas experiências para quem desejar nos presentear via PIX.
            </p>
          </div>

          <GiftGrid
            gifts={pixGifts}
            reservedSet={reservedSet}
            onSelect={setSelecionado}
          />
        </div>
      </section>

      <section id="physical-gifts" className="w-full bg-married-base py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="italic text-4xl lg:text-5xl font-light text-married-three leading-tight font-casamento-cormorant text-center">
              Presentes <span className="text-married-main">físicos</span>
            </h2>
            <p className="mt-4 text-center text-married-four font-light font-casamento-relaway text-lg">
              Para evitar presentes repetidos, confirme o item escolhido com seu nome antes de finalizar a compra.
            </p>
          </div>

          <GiftGrid
            gifts={physicalGifts}
            reservedSet={reservedSet}
            onSelect={setSelecionado}
          />
        </div>
      </section>

      {selecionado && (
        <Modal
          presente={selecionado}
          onClose={() => setSelecionado(null)}
          onGiftReserved={handleGiftReserved}
        />
      )}
    </>
  );
}

function GiftGrid({
  gifts,
  reservedSet,
  onSelect,
}: {
  gifts: IGift[];
  reservedSet: Set<string>;
  onSelect: (gift: IGift) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gifts.map((gift, index) => (
        <GiftCard
          key={gift.id}
          gift={gift}
          index={index}
          isReserved={
            gift.type === "physical" && reservedSet.has((gift as IPhysicalGift).id)
          }
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function GiftCard({
  gift,
  index,
  isReserved,
  onSelect,
}: {
  gift: IGift;
  index: number;
  isReserved: boolean;
  onSelect: (gift: IGift) => void;
}) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();
  const delayMs = (index % 3) * 120;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`bg-white group flex flex-col border border-married-second/70 rounded-b-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_18px_45px_-20px_rgba(149,129,90,0.35)] hover:-translate-y-1 hover:border-married-three/60 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isReserved ? "opacity-55" : ""}`}
    >
      <div
        className={`relative aspect-4/3 overflow-hidden ${
          gift.type === "physical" ? "bg-white" : ""
        }`}
      >
        <GiftImage
          gift={gift}
          className={`transition-transform duration-700 ease-out ${
            isReserved ? "grayscale" : "group-hover:scale-[1.06]"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {isReserved && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/55">
            <span className="bg-white px-4 py-2 text-xs tracking-[0.2em] uppercase text-married-four border border-married-second">
              já escolhido
            </span>
          </div>
        )}
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
        <p className="text-sm font-light leading-relaxed text-married-four/75 font-casamento-relaway pb-4">
          {gift.descricao}
        </p>
        <button
          onClick={() => onSelect(gift)}
          disabled={isReserved}
          className="cursor-pointer font-casamento-relaway mt-auto w-full py-2.5 text-xs tracking-[0.2em] uppercase border border-stone-200 text-married-four hover:bg-married-four hover:text-white hover:border-married-bg-married-four transition-all duration-300 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-400 disabled:hover:bg-stone-100 disabled:hover:text-stone-400"
        >
          {isReserved
            ? "Presente já escolhido"
            : gift.type === "physical"
              ? "Vou presentear"
              : "Presentear via PIX"}
        </button>
      </div>
    </div>
  );
}

function GiftImage({
  gift,
  className,
}: {
  gift: IGift;
  className?: string;
}) {
  const isPhysical = gift.type === "physical";
  const fit = isPhysical ? "object-contain p-10 sm:p-12" : "object-cover";
  const imageClassName = `${fit} ${className ?? ""}`;

  if (typeof gift.foto === "string") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={gift.foto}
        alt={gift.titulo}
        className={`h-full w-full ${imageClassName}`}
        loading="lazy"
      />
    );
  }

  return (
    <Image
      src={gift.foto}
      alt={gift.titulo}
      fill
      className={imageClassName}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}
