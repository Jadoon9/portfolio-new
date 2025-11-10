"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  User,
  Briefcase,
  Award,
  Star,
  Rocket,
  Sparkles,
  Download,
} from "lucide-react";
import { AnimatedCounter } from "../ui/animated-counter";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const texts = [
    "Front-End Developer",
    "React Specialist",
    "Next.js Expert",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    setIsDownloading(true);
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update this path to your actual resume file
    link.download = "Shahzeb_Jadoon_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset downloading state after animation
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Tech Icons - Reduced for performance */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-6xl opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code className="text-blue-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 text-5xl opacity-10"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Palette className="text-purple-400" />
        </motion.div>

        {/* Interactive Mouse Follower - Optimized */}
        <motion.div
          className="absolute w-3 h-3 bg-white/20 rounded-full pointer-events-none"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white/90 text-lg font-medium border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span>Welcome to my digital space</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shahzeb Jadoon
            </span>
          </motion.h1>

          {/* Dynamic Title */}
          <motion.div
            className="text-2xl md:text-4xl text-white/80 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold"
            >
              {texts[currentText]}
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting beautiful, performant web experiences with modern
            technologies.
            <br />
            <span className="text-white/50">
              Let&apos;s build something amazing together.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Explore My Work</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className="group relative px-8 py-4 border-2 border-purple-400/50 bg-purple-500/20 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-purple-500/30 hover:border-purple-300 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                {isDownloading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </>
                )}
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Jadoon9",
                color: "hover:text-gray-300",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/shahzeb-jadoon-8bb2949b/",
                color: "hover:text-blue-400",
              },
              {
                icon: Mail,
                href: "mailto:shahzebjadoon0@gmail.com",
                color: "hover:text-red-400",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 border border-white/20`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { value: 5, suffix: "+", label: "Years Experience", icon: Award },
              {
                value: 50,
                suffix: "+",
                label: "Projects Done",
                icon: Briefcase,
              },
              { value: 20, suffix: "+", label: "Happy Clients", icon: User },
              { value: 15, suffix: "+", label: "Technologies", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300 border border-white/20">
                  <stat.icon className="w-8 h-8 text-white/80" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    delay={1.8 + index * 0.2}
                  />
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.button
            onClick={() => scrollToSection("#about")}
            className="text-white/60 hover:text-white transition-colors duration-200 flex flex-col items-center space-y-2 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium group-hover:text-white">
              Scroll Down
            </span>
            <ArrowDown className="w-5 h-5 group-hover:text-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
