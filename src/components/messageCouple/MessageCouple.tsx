"use client";

import { useState } from "react";
import { MessageCoupleDTO } from "./types";
import { useForm } from "react-hook-form";
import { saveMessageCouple } from "@/app/actions/messageCouple";

export default function MessageCouple() {
  const [isLoading, setIsLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageCoupleDTO>();

  async function handleOnSubmit(data: MessageCoupleDTO) {
    try {
      setIsLoading(true);
      await saveMessageCouple(data);
      reset();
      setEnviado(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="mensagem" className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto bg-married-second p-10 rounded-lg">

        {/* cabeçalho */}
        <div className="mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-light text-married-four leading-tight font-casamento-cormorant text-center">
            Nos deixe uma{" "}
            <em className="italic text-married-three">mensagem</em>
          </h2>
          <p className="mt-5 text-lg text-married-four font-casamento-relaway font-light leading-loose  text-center">
            Suas palavras significam muito para nós. Guardaremos para sempre.
          </p>
        </div>

        {!enviado ? (
          <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-0">

            {/* nome */}
            <div className="pb-1 mb-8 border-b border-married-four">
              <label className="block text-xs tracking-[0.25em] uppercase text-married-four mb-3 font-casamento-relaway">
                Nome
              </label>
              <input
                {...register("name", { required: true })}
             
                className="w-full bg-transparent py-1 text-stone-700 text-base font-casamento-cormorant placeholder:text-stone-300 focus:outline-none transition-colors"
              />
              {errors.name && (
                <p className="mt-2 text-xs text-married-four font-casamento-relaway">
                  Por favor, informe seu nome.
                </p>
              )}
            </div>

            {/* mensagem */}
            <div className="pb-1 mb-10 border-b border-married-four">
              <label className="block text-xs tracking-[0.25em] uppercase text-married-four mb-3 font-casamento-relaway">
                Mensagem
              </label>
              <textarea
                {...register("message")}
                rows={5}
               
                className="w-full bg-transparent py-1 text-stone-700 text-base font-casamento-cormorant placeholder:text-married-light focus:outline-none transition-colors resize-none leading-loose"
              />
            </div>

            {/* botão */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="border border-married-main bg-married-three text-white font-casamento-relaway text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-stone-800 transition-all duration-500 disabled:opacity-40 rounded-base cursor-pointer"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-3 h-3" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Enviando...
                  </span>
                ) : "Enviar mensagem"}
              </button>
            </div>

          </form>
        ) : (
          /* sucesso */
          <div className="py-16 space-y-6">
            <div className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-stone-600" strokeWidth={1.2}>
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-light text-stone-800 font-casamento-cormorant">
                Mensagem enviada!
              </h3>
              <p className="text-sm text-married-light font-casamento-relaway font-light leading-loose">
                Obrigado pelo carinho. Vamos guardar suas palavras para sempre.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="block h-px w-10 bg-stone-200" />
              <span className="text-married-light text-xs">♥</span>
              <span className="block h-px w-10 bg-stone-200" />
            </div>

            <button
              onClick={() => setEnviado(false)}
              className="text-xs tracking-widest uppercase text-married-light hover:text-stone-600 transition-colors underline underline-offset-4 font-casamento-relaway"
            >
              Enviar outra mensagem
            </button>
          </div>
        )}

      </div>
    </section>
  );
}