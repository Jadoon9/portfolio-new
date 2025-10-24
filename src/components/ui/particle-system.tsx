"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  colors?: string[];
  className?: string;
}

export function ParticleSystem({
  particleCount = 50,
  colors = ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"],
  className = "",
}: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from(
      { length: particleCount },
      (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100 + 50,
      })
    );

    setParticles(initialParticles);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles
          .map((particle) => {
            let newX = particle.x + particle.vx;
            let newY = particle.y + particle.vy;
            let newVx = particle.vx;
            let newVy = particle.vy;

            // Mouse interaction
            const dx = mousePosition.x - particle.x;
            const dy = mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const force = (100 - distance) / 100;
              newVx += (dx / distance) * force * 0.1;
              newVy += (dy / distance) * force * 0.1;
            }

            // Boundary collision
            if (newX <= 0 || newX >= window.innerWidth) {
              newVx *= -0.8;
              newX = Math.max(0, Math.min(window.innerWidth, newX));
            }
            if (newY <= 0 || newY >= window.innerHeight) {
              newVy *= -0.8;
              newY = Math.max(0, Math.min(window.innerHeight, newY));
            }

            // Friction
            newVx *= 0.99;
            newVy *= 0.99;

            return {
              ...particle,
              x: newX,
              y: newY,
              vx: newVx,
              vy: newVy,
              life: particle.life - 0.5,
            };
          })
          .filter((particle) => particle.life > 0)
      );

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [particleCount, colors, mousePosition]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / 100,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [
              particle.life / 100,
              (particle.life / 100) * 0.5,
              particle.life / 100,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
