"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorTrailProps {
  children: React.ReactNode;
}

export function CursorTrail({ children }: CursorTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      setTrail((prev) => [
        ...prev.slice(-10), // Keep only last 10 points
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {children}

      {/* Cursor Trail */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: point.x - 4,
              top: point.y - 4,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Main cursor */}
        <motion.div
          className="absolute w-4 h-4 bg-blue-600 rounded-full"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </div>
    </>
  );
}
