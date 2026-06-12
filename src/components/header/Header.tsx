"use client";

import { useState } from "react";
import Link from "next/link";
import { useSmoothScroll } from "@/src/hooks/useSmoothScroll";

type MenuItem = {
  label: string;
  href: string;
  id: string;
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTo } = useSmoothScroll(2000);

  const menuItems: MenuItem[] = [
    { label: "Nossa História", href: "#historia", id: "historia" },
    { label: "Detalhes", href: "#detalhes", id: "detalhes" },
    { label: "Confirmação", href: "#confirm", id: "confirm" },
    { label: "Lista de presentes", href: "#list", id: "list" },
    { label: "Mensagem", href: "#mensagem", id: "mensagem" },
  ];

  return (
    <header
      className={`w-full bg-casamento-branco backdrop-blur-md  z-50 border-b border-gray-100  ${isOpen ? "max-h-max" : "max-h-20"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 z-50">
            <Link
              href="/"
              className="text-3xl font-bold text-casamento-offblack font-casamento-cormorant"
            >
              Ana <span className="text-married-main font-casamento-play">&</span> Bruno
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item: MenuItem) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                className="text-xl font-semibold text-married-second text-shadow-married-black hover:text-married-black transition-colors font-casamento-cormorant"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 focus:outline-none z-50"
              aria-label="Abrir menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
         inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden ${isOpen ? "flex" : "hidden"}  flex-col items-center justify-center space-y-6 border-t border-gray-400 border-b py-5 
      `}
      >
        {menuItems.map((item, index) => (
          <div key={index}>
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                scrollTo(item.id);
                setIsOpen(false);
              }}
              className={`  text-gray-800 hover:text-pink-500 w-full text-center font-casamento-relaway  ${index + 1 === menuItems.length ? "border-b-0 pb-0" : "border-b pb-4"}  `}
            >
              <div className="font-casamento-relaway text-base">
                {item.label}
              </div>
            </a>
          </div>
        ))}
      </div>
    </header>
  );
}
