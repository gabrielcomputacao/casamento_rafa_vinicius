'use client';
import { useState, useEffect } from 'react';

function CalendarCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* calendário */}
      <div className="w-24 md:w-32 bg-white shadow-sm overflow-hidden" >

        {/* topo do calendário — argolas + cor */}
        <div className="relative flex items-center justify-center py-2 bg-married-main">
          {/* argolas */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-5">
            <div className="w-2 h-3 rounded-b-full bg-white/60 border border-white/40" />
            <div className="w-2 h-3 rounded-b-full bg-white/60 border border-white/40" />
          </div>
          <span className="text-white/90 text-xs tracking-[0.2em] uppercase font-casamento-relaway pt-1">
            {label}
          </span>
        </div>

        {/* número */}
        <div className="flex items-center justify-center py-4 md:py-6">
          <span className="text-4xl md:text-5xl font-light font-casamento-inter text-married-black" >
            {String(value).padStart(2, '0')}
          </span>
        </div>

        {/* grade decorativa de dias */}
        <div className="px-3 pb-3 grid grid-cols-7 gap-0.5">
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-full rounded-sm"
              style={{ backgroundColor: i % 7 === 0 ? "#819596" : "#F5F5F5" }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Countdown() {
  const targetDate = new Date('2026-09-27T17:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days:    Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours:   Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Dias',     value: timeLeft.days    },
    { label: 'Horas',    value: timeLeft.hours   },
    { label: 'Minutos',  value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 md:py-1 md:pt-10 bg-married-base" >
      <div className="max-w-4xl mx-auto px-6 text-center">

      
       {/*  <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block h-px w-10" style={{ backgroundColor: "#c4a09c" }} />
            <span className="text-xs tracking-[0.3em] uppercase font-casamento-relaway" style={{ color: "#b09090" }}>
              faltam apenas
            </span>
            <span className="block h-px w-10" style={{ backgroundColor: "#c4a09c" }} />
          </div>
          <h2 className="italic text-4xl md:text-5xl font-light font-casamento-cormorant text-married-black" >
            Contagem <em className="text-married-black">regressiva</em>
          </h2>
        </div> */}

        {/* cards */}
        <div className="flex justify-center gap-1 md:gap-8">
          {timeUnits.map((unit) => (
            <CalendarCard key={unit.label} value={unit.value} label={unit.label} />
          ))}
        </div>

        {/* data */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="block h-px w-10 bg-married-black"  />
          <p className="text-lg font-casamento-inter font-medium text-married-three" >
            26 de Setembro de 2026
          </p>
          <span className="block h-px w-10 bg-married-black"  />
        </div>

      </div>
    </section>
  );
}