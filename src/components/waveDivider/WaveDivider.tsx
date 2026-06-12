// components/WaveDivider.tsx

type Props = {
  fromColor: string; // cor da section de cima
  toColor: string;   // cor da section de baixo
  flip?: boolean;    // inverte a direção da onda
};

export default function WaveDivider({ fromColor, toColor, flip = false }: Props) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      style={{ background: `linear-gradient(to bottom, ${fromColor} 70%, ${toColor} 60%)` }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-28 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}