"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface CursorTrailProps {
  children: React.ReactNode;
}

export function CursorTrail({ children }: CursorTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const idCounter = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    setTrail((prev) => {
      const newTrail = [
        ...prev.slice(-8), // Keep only last 8 points for better performance
        { x: e.clientX, y: e.clientY, id: ++idCounter.current },
      ];
      return newTrail;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      {children}

      {/* Cursor Trail */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {trail.map((point) => (
          <motion.div
            key={point.id}
            className="absolute w-1 h-1 bg-blue-500/60 rounded-full"
            style={{
              left: point.x - 2,
              top: point.y - 2,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {
              setTrail((prev) => prev.filter((p) => p.id !== point.id));
            }}
          />
        ))}

        {/* Main cursor */}
        <motion.div
          className="absolute w-3 h-3 bg-blue-600/80 rounded-full"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </>
  );
}
