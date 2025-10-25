"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Code,
  Coffee,
  Heart,
  Users,
  Award,
  Zap,
  Globe,
  Rocket,
  Lightbulb,
  Target,
  Clock,
  BookOpen,
  Camera,
  Music,
  Gamepad2,
} from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("story");

  const interests = [
    {
      icon: Code,
      title: "Coding",
      description: "Building amazing web experiences",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Coffee,
      title: "Coffee",
      description: "Fuel for creativity and productivity",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Open Source",
      description: "Contributing to the community",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Mentoring",
      description: "Helping others grow in tech",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const achievements = [
    {
      icon: Award,
      value: 5,
      suffix: "+ Years",
      subtitle: "Experience",
      color: "text-yellow-500",
      bgColor: "from-yellow-400 to-orange-500",
    },
    {
      icon: Globe,
      value: 50,
      suffix: "+",
      subtitle: "Projects",
      color: "text-blue-500",
      bgColor: "from-blue-400 to-cyan-500",
    },
    {
      icon: Users,
      value: 20,
      suffix: "+",
      subtitle: "Clients",
      color: "text-green-500",
      bgColor: "from-green-400 to-emerald-500",
    },
    {
      icon: Zap,
      value: 15,
      suffix: "+",
      subtitle: "Technologies",
      color: "text-purple-500",
      bgColor: "from-purple-400 to-pink-500",
    },
  ];

  const hobbies = [
    { icon: Camera, name: "Photography", emoji: "📸" },
    { icon: Music, name: "Music", emoji: "🎵" },
    { icon: BookOpen, name: "Reading", emoji: "📚" },
    { icon: Gamepad2, name: "Gaming", emoji: "🎮" },
  ];

  const tabs = [
    { id: "story", label: "My Story", icon: BookOpen },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "hobbies", label: "Hobbies", icon: Heart },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2RjEiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-6 py-3 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Users className="w-5 h-5" />
            <span>About Me</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8">
            Get to Know{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Shahzeb
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A passionate developer who loves creating digital experiences that
            make a difference. Let me share my journey with you.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {activeTab === "story" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
                    My Journey
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    <p>
                      I'm a passionate Front-End Developer with over 5 years of
                      experience creating beautiful, performant web
                      applications. I specialize in React.js, Next.js,
                      TypeScript, and modern front-end ecosystems.
                    </p>
                    <p>
                      My journey began with a curiosity about how websites work,
                      and it has evolved into a deep passion for crafting
                      exceptional user experiences. I believe in writing clean,
                      maintainable code and staying up-to-date with the latest
                      technologies and best practices.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new
                      technologies, contributing to open-source projects, or
                      sharing knowledge with the developer community. I'm always
                      excited to take on new challenges and learn something new.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Target,
                      title: "Goal-Oriented",
                      description: "Always focused on delivering results",
                    },
                    {
                      icon: Clock,
                      title: "Time Management",
                      description: "Efficient and deadline-driven",
                    },
                    {
                      icon: Users,
                      title: "Team Player",
                      description: "Collaborative and supportive",
                    },
                    {
                      icon: Rocket,
                      title: "Innovation",
                      description: "Always exploring new possibilities",
                    },
                  ].map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-200">
                          <value.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                    Core Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest.title}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg group cursor-pointer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${interest.color} rounded-lg flex items-center justify-center`}
                          >
                            <interest.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                              {interest.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {interest.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "hobbies" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Heart className="w-6 h-6 text-red-500 mr-3" />
                    Beyond Coding
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={hobby.name}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg text-center group cursor-pointer"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                          {hobby.emoji}
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {hobby.name}
                        </h4>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right side - Enhanced Avatar and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Enhanced Avatar */}
            <motion.div
              className="relative mb-12"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-96 h-96 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="w-92 h-92 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-88 h-88 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-84 h-84 bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-gray-600 dark:to-gray-500 rounded-full flex items-center justify-center">
                      <div className="w-80 h-80 bg-gradient-to-br from-blue-300 to-indigo-300 dark:from-gray-500 dark:to-gray-400 rounded-full flex items-center justify-center">
                        <Users className="w-48 h-48 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating elements around avatar - Optimized */}
                <motion.div
                  className="absolute -top-8 -right-8 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-200 dark:border-blue-800"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Rocket className="w-10 h-10 text-blue-600" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-12 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-indigo-200 dark:border-indigo-800"
                  animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code className="w-10 h-10 text-indigo-600" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-purple-200 dark:border-purple-800"
                  animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="w-10 h-10 text-purple-600" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-12 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-green-200 dark:border-green-800"
                  animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Globe className="w-10 h-10 text-green-600" />
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={false}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-200">
                        <achievement.icon
                          className={`w-8 h-8 ${achievement.color}`}
                        />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      <AnimatedCounter
                        value={achievement.value}
                        suffix={achievement.suffix}
                        duration={2.5}
                        delay={0.8 + index * 0.2}
                      />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {achievement.subtitle}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Interactive Section */}
        <motion.div
          className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Fun Facts About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Click on the cards below to discover some interesting things about
              me!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "☕",
                fact: "I drink 5+ cups of coffee daily",
                detail: "Coffee is my fuel for creativity!",
                color:
                  "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
              },
              {
                emoji: "🌙",
                fact: "I'm a night owl developer",
                detail: "My best code comes after midnight",
                color:
                  "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
              },
              {
                emoji: "🎵",
                fact: "I code with music playing",
                detail: "Lo-fi beats are my coding soundtrack",
                color:
                  "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl text-center cursor-pointer group border border-gray-200 dark:border-gray-700`}
                whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-200">
                  {item.emoji}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                  {item.fact}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
