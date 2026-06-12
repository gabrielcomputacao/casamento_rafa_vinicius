"use client";

import { useState } from "react";
import { saveGuest } from "@/app/actions/guests";
import { useForm } from "react-hook-form";
import { CompanionsDTO } from "./utils";

export default function ConvidadosClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanionsDTO>();

  async function handleOnSubmit(data: CompanionsDTO) {
    try {
      setIsLoading(true);
      await saveGuest(data);
      setSucesso(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="confirm"
      className="relative w-full py-14 px-6 overflow-hidden"
    >
      <div className="overlay" />
      <div className="relative max-w-6xl mx-auto rounded-lg">
        {/* cabeçalho */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-10 bg-married-light" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-3.5 h-3.5"
              strokeWidth={1}
            >
              <path
                d="M12 21C12 21 3 14 3 8.5C3 5.46 5.46 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.54 3 23 5.46 23 8.5C23 14 12 21 12 21Z"
                stroke="#fff "
                strokeLinejoin="round"
              />
            </svg>
            <span className="block h-px w-10 bg-married-light" />
          </div>

          <h2 className="italic text-4xl lg:text-5xl font-light font-casamento-cormorant leading-tight mb-4 text-married-black">
            Confirme sua <em className="text-married-light" >presença</em>
          </h2>
          <p className="text-lg font-casamento-relaway font-light leading-loose  mx-auto text-married-light">
            Sua presença é o que tornará esse dia ainda mais especial para nós.
          </p>
        </div>

        {/* card do formulário */}
        <div
          className="bg-white backdrop-blur-sm px-8 py-10 shadow-sm"
          style={{ borderColor: "#737D7E", border: "1px solid #737D7E" }}
        >
          {!sucesso ? (
            <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-0">
              {/* nome */}
              <div className="pb-1 mb-7">
                <label
                  className="block text-xs tracking-[0.25em] uppercase mb-3 font-casamento-relaway text-married-main"
                  
                >
                  Nome completo *
                </label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Como devemos te chamar?"
                  className="w-full bg-transparent py-1 text-base font-casamento-cormorant focus:outline-none transition-colors "
                  style={{ color: "#737D7E" }}
                />
                {errors.name && (
                  <p
                    className="mt-2 text-xs font-casamento-relaway"
                    style={{ color: "#819596" }}
                  >
                    Por favor, informe seu nome.
                  </p>
                )}
              </div>

              {/* email + telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 pb-1 mb-7">
                <div>
                  <label
                    className="block text-xs tracking-[0.25em] uppercase mb-3 font-casamento-relaway text-married-main"
                    
                  >
                    E-mail
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full bg-transparent py-1 text-base font-casamento-cormorant focus:outline-none"
                    style={{ color: "#737D7E" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs tracking-[0.25em] uppercase mb-3 font-casamento-relaway text-married-main"
                    
                  >
                    Telefone
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="(11) 99999-0000"
                    className="w-full bg-transparent py-1 text-base font-casamento-cormorant focus:outline-none "
                    style={{ color: "#737D7E" }}
                  />
                </div>
              </div>

              {/* acompanhantes + observação */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 pb-8 mb-8">
                <div>
                  <label
                    className="block text-xs tracking-[0.25em] uppercase mb-3 font-casamento-relaway text-married-main"
                    
                  >
                    Acompanhantes
                  </label>
                  <select
                    {...register("companions", { required: true })}
                    defaultValue={0}
                    className="w-full bg-transparent py-1 text-base font-casamento-cormorant focus:outline-none appearance-none cursor-pointer"
                    style={{ color: "#737D7E" }}
                  >
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0
                          ? "Nenhum"
                          : `${i} acompanhante${i > 1 ? "s" : ""}`}
                      </option>
                    ))}
                  </select>
                  {errors.companions && (
                    <p
                      className="mt-2 text-xs font-casamento-relaway"
                      style={{ color: "#819596" }}
                    >
                      Campo obrigatório.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-xs tracking-[0.25em] uppercase mb-3 font-casamento-relaway text-married-main"
                    
                  >
                    Observação
                  </label>
                  <input
                    {...register("observation")}
                    placeholder="Restrição alimentar, etc."
                    className="w-full bg-transparent py-1 text-base font-casamento-cormorant focus:outline-none "
                    style={{ color: "#737D7E" }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto sm:min-w-56 font-casamento-relaway text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-500 disabled:opacity-40 rounded-base cursor-pointer"
                  style={{
                    backgroundColor: "#737D7E",
                    borderColor: "#737D7E",
                    border: "1px solid",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#7C8886";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "#7C8886";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "white";
                  }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Confirmando...
                    </span>
                  ) : (
                    "Confirmar presença"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="flex justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid #819596" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    strokeWidth={1.2}
                    style={{ color: "#819596" }}
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3
                  className="text-2xl font-light font-casamento-cormorant"
                  style={{ color: "#737D7E" }}
                >
                  Presença confirmada!
                </h3>
                <p
                  className="text-sm font-casamento-relaway font-light leading-loose"
                  style={{ color: "#9a7570" }}
                >
                  Mal podemos esperar para celebrar com você.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 pt-1">
                <span
                  className="block h-px w-10"
                  style={{ backgroundColor: "#d4b0ac" }}
                />
                <span className="text-xs" style={{ color: "#819596" }}>
                  ♥
                </span>
                <span
                  className="block h-px w-10"
                  style={{ backgroundColor: "#d4b0ac" }}
                />
              </div>
              <button
                onClick={() => setSucesso(false)}
                className="text-xs tracking-widest uppercase font-casamento-relaway underline underline-offset-4 transition-colors"
                
              >
                Confirmar outra presença
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
