"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FunButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "fun";
  disabled?: boolean;
}

export function FunButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}: FunButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    if (onClick) onClick();
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "secondary":
        return "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white";
      case "fun":
        return "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-200 
        ${getVariantStyles()}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      animate={isClicked ? { scale: [1, 0.95, 1.05, 1] } : {}}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={isClicked ? { rotate: [0, -10, 10, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* Ripple effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
}
