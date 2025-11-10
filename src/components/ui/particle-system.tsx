"use client";

import { useEffect, useState, useRef } from "react";
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
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const isAnimationStartedRef = useRef(false);

  // Initialize particles and start animation
  useEffect(() => {
    if (typeof window === "undefined" || isAnimationStartedRef.current) return;
    isAnimationStartedRef.current = true;

    // Mouse move handler - update ref instead of state
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let isRunning = true;
    const animate = () => {
      if (!isRunning) return;

      setParticles((prevParticles) => {
        if (prevParticles.length === 0) {
          return prevParticles;
        }

        return prevParticles
          .map((particle) => {
            let newX = particle.x + particle.vx;
            let newY = particle.y + particle.vy;
            let newVx = particle.vx;
            let newVy = particle.vy;

            // Mouse interaction - use ref to get latest position
            const mousePos = mousePositionRef.current;
            const dx = mousePos.x - particle.x;
            const dy = mousePos.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100 && distance > 0) {
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
          .filter((particle) => particle.life > 0);
      });

      if (isRunning) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // Initialize particles and start animation
    const initParticles = () => {
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
      // Start animation after particles are set
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Use requestAnimationFrame to defer state update
    requestAnimationFrame(initParticles);

    return () => {
      isRunning = false;
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [particleCount, colors]);

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
