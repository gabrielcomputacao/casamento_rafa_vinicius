"use client";

import { useEffect, useRef } from "react";

interface RiceGrain {
  x: number;
  y: number;
  length: number;
  width: number;
  speed: number;
  angle: number; // ângulo de inclinação (radianos)
  opacity: number;
  rotation: number; // rotação própria do grão
  rotationSpeed: number;
  wobble: number; // fase para movimento suave
  wobbleSpeed: number;
}

function createGrain(canvasWidth: number, fromTop = false): RiceGrain {
  const angle = (Math.PI / 180) * (10 + Math.random() * 15); // 10~25 graus
  return {
    x: Math.random() * (canvasWidth + 200) - 100,
    y: fromTop
      ? -20 - Math.random() * 200
      : -20 - Math.random() * window.innerHeight,
    length: 6 + Math.random() * 8, // 6~14px
    width: 2.5 + Math.random() * 2, // 2.5~4.5px
    speed: 1.8 + Math.random() * 2.8, // velocidade de queda
    angle,
    opacity: 0.35 + Math.random() * 0.5, // 0.35~0.85
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.04,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.015 + Math.random() * 0.02,
  };
}

export default function RiceRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRAIN_COUNT = 120;
    let grains: RiceGrain[] = [];
    let animationId: number;
    let tick = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Inicializa grãos espalhados pela tela toda
    for (let i = 0; i < GRAIN_COUNT; i++) {
      grains.push(createGrain(canvas.width, false));
    }

    const drawGrain = (g: RiceGrain) => {
      ctx.save();
      ctx.translate(g.x, g.y);
      ctx.rotate(g.rotation);

      // Grão de arroz = elipse alongada com gradiente
      const grad = ctx.createLinearGradient(-g.length / 2, 0, g.length / 2, 0);
      grad.addColorStop(0, `rgba(180,175,170,0)`);
      grad.addColorStop(0.2, `rgba(160,155,150,${g.opacity})`);
      grad.addColorStop(0.5, `rgba(170,165,160,${g.opacity})`);
      grad.addColorStop(0.8, `rgba(150,145,140,${g.opacity})`);
      grad.addColorStop(1, `rgba(150,145,140,0)`);

      ctx.beginPath();
      ctx.ellipse(0, 0, g.length / 2, g.width / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Brilho sutil no centro
      const shine = ctx.createRadialGradient(
        -g.length * 0.1,
        -g.width * 0.15,
        0,
        0,
        0,
        g.length * 0.4,
      );
      shine.addColorStop(0, `rgba(200,195,190,${g.opacity * 0.6})`);
      shine.addColorStop(1, `rgba(200,195,190,0)`);
      ctx.beginPath();
      ctx.ellipse(0, 0, g.length / 2, g.width / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = shine;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      grains.forEach((g, i) => {
        // Movimento: cai com ângulo + leve wobble horizontal
        g.wobble += g.wobbleSpeed;
        g.x += Math.sin(g.angle) * g.speed + Math.sin(g.wobble) * 0.4;
        g.y += Math.cos(g.angle) * g.speed;
        g.rotation += g.rotationSpeed;

        drawGrain(g);

        // Reinicia quando sai da tela
        if (g.y > canvas.height + 20) {
          grains[i] = createGrain(canvas.width, true);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  );
}
