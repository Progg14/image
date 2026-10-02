'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PrimeiroComponenteProps {
  mensagem?: string;
  mensagemBotao?: string;
  /** Caminho da foto, ex: "/samurai.jpg" (coloque o arquivo na pasta /public) */
  foto?: string;
}

const barras = [40, 70, 55, 90, 65, 100, 60, 85, 50, 75, 45];

export const PrimeiroComponente = ({
  mensagem,
  mensagemBotao = 'Entrar na Roda!',
  foto,
}: PrimeiroComponenteProps) => {
  const router = useRouter();

  const clique = () => {
    console.log('Botão Clicado...');
    router.push('/Galeria');
  };

  return (
    <section className="relative w-full max-w-md mx-auto my-8 overflow-hidden rounded-3xl border border-red-600/40 bg-[radial-gradient(ellipse_at_top,#3b0a10_0%,#0b0b0f_60%)] shadow-[0_0_60px_-10px_rgba(225,29,46,0.55)]">
      <style>{`
        @keyframes rima-eq { 0%,100% { transform: scaleY(.25); } 50% { transform: scaleY(1); } }
        .rima-eq { animation: rima-eq 1s ease-in-out infinite; transform-origin: bottom; }
        @media (prefers-reduced-motion: reduce) { .rima-eq { animation: none; } }
      `}</style>

      {/* Kanji "batalha" ao fundo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-6 select-none text-[11rem] font-black leading-none text-white/[0.04]"
      >
        戦
      </span>

      <div className="relative flex flex-col items-center gap-6 px-6 py-8 text-center">
        {/* Título */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-red-400">
            ラップバトル
          </p>
          <h1 className="mt-1 text-4xl font-black italic tracking-tight text-red-600 sm:text-5xl">
            Batalha de Rima
          </h1>
        </div>

        {/* Foto com sol nascente atrás */}
        <figure className="flex flex-col items-center gap-5">
          <div className="relative flex h-64 w-64 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-red-600 shadow-[0_0_80px_10px_rgba(225,29,46,0.45)]" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-[#f3efe6] bg-zinc-900">
              {foto ? (
                <Image
                  src={foto}
                  alt="O Samurai da Aldeia"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-14 w-14"
                    aria-hidden="true"
                  >
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" />
                  </svg>
                  <span className="text-sm font-medium">Sua foto aqui</span>
                </div>
              )}
            </div>
          </div>

          {/* Equalizador */}
          <div className="flex h-8 items-end gap-1" aria-hidden="true">
            {barras.map((h, i) => (
              <span
                key={i}
                className="rima-eq w-1.5 rounded-full bg-red-500"
                style={{ height: `${h}%`, animationDelay: `${i * 0.09}s` }}
              />
            ))}
          </div>

          <figcaption className="text-3xl font-black text-red-600 sm:text-4xl">
            O Samurai da Aldeia
            <span className="mx-auto mt-2 block h-1 w-24 -skew-x-12 bg-red-600" />
          </figcaption>
        </figure>

        {/* Rima */}
        {mensagem && (
          <p className="max-w-xs text-base font-medium italic text-zinc-300">
            “{mensagem}”
          </p>
        )}

        {/* Botão */}
        <button
          onClick={clique}
          className="group -skew-x-12 bg-red-600 px-10 py-3 text-lg font-black uppercase tracking-wide text-white shadow-[0_8px_24px_-6px_rgba(225,29,46,0.8)] transition-all duration-200 hover:bg-red-500 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
        >
          <span className="inline-block skew-x-12">{mensagemBotao}</span>
        </button>
      </div>
    </section>
  );
};