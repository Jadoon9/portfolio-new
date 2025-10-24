"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data";
import { Skill } from "@/types";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  Layers,
  Settings,
  Star,
  TrendingUp,
  Award,
  Rocket,
} from "lucide-react";

const categories = [
  {
    id: "all",
    label: "All",
    icon: Star,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Palette,
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: "tools",
    label: "Tools",
    icon: Settings,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: "libraries",
    label: "Libraries",
    icon: Layers,
    color: "from-purple-400 to-pink-500",
  },
] as const;

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "frontend" | "tools" | "libraries"
  >("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const skillCategories = {
    frontend: {
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      count: skills.filter((s) => s.category === "frontend").length,
    },
    tools: {
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      count: skills.filter((s) => s.category === "tools").length,
    },
    libraries: {
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      count: skills.filter((s) => s.category === "libraries").length,
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2RjEiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 15,
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
            <Zap className="w-5 h-5" />
            <span>Skills & Technologies</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies and tools I work with
            to create amazing web experiences.
          </p>
        </motion.div>

        {/* Skill Categories Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {Object.entries(skillCategories).map(([key, category], index) => (
            <motion.div
              key={key}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                {key}
              </h3>
              <p className="text-3xl font-bold text-gray-600 dark:text-gray-400">
                {category.count}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technologies
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                selectedCategory === category.id
                  ? "text-white shadow-xl"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-700"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>{category.label}</span>
              {selectedCategory === category.id && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                  layoutId="activeCategory"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
              }}
              className="group"
            >
              <ModernSkillCard
                skill={skill}
                isHovered={hoveredSkill === skill.name}
                isActive={activeSkill === skill.name}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                onClick={() =>
                  setActiveSkill(activeSkill === skill.name ? null : skill.name)
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Breakdown */}
        <motion.div
          className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mr-3" />
              Skill Level Breakdown
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Hover over the skills to see detailed information and my
              proficiency levels!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "React & Next.js",
                level: 95,
                color: "from-blue-500 to-blue-600",
                description: "Expert level with 5+ years experience",
                icon: Code,
              },
              {
                name: "TypeScript",
                level: 90,
                color: "from-indigo-500 to-indigo-600",
                description: "Advanced proficiency in type systems",
                icon: Database,
              },
              {
                name: "Tailwind CSS",
                level: 95,
                color: "from-cyan-500 to-cyan-600",
                description: "Master of utility-first CSS framework",
                icon: Palette,
              },
              {
                name: "Framer Motion",
                level: 85,
                color: "from-purple-500 to-purple-600",
                description: "Creating smooth animations and interactions",
                icon: Zap,
              },
              {
                name: "Git & GitHub",
                level: 90,
                color: "from-green-500 to-green-600",
                description: "Version control and collaboration expert",
                icon: Settings,
              },
              {
                name: "Testing",
                level: 80,
                color: "from-orange-500 to-orange-600",
                description: "Unit, integration, and E2E testing",
                icon: Award,
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl group cursor-pointer border border-gray-200 dark:border-gray-600"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
                  <motion.div
                    className={`h-4 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                  />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Interactive Section */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-10 border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-blue-500 mr-3" />
              Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Always learning, always growing. Here's what I'm currently
              exploring!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tech: "Web3",
                progress: 60,
                color: "from-purple-500 to-pink-500",
              },
              {
                tech: "AI/ML",
                progress: 40,
                color: "from-green-500 to-emerald-500",
              },
              {
                tech: "Mobile Dev",
                progress: 70,
                color: "from-blue-500 to-cyan-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.tech}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center group cursor-pointer border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {item.tech}
                </h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-3">
                  <motion.div
                    className={`h-3 bg-gradient-to-r ${item.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${item.progress}%` } : { width: 0 }
                    }
                    transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.progress}% Complete
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ModernSkillCard({
  skill,
  isHovered,
  isActive,
  onHoverStart,
  onHoverEnd,
  onClick,
}: {
  skill: Skill;
  isHovered: boolean;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "from-blue-500 to-cyan-500";
      case "tools":
        return "from-green-500 to-emerald-500";
      case "libraries":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden ${
        isActive ? "ring-2 ring-blue-500" : ""
      }`}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
    >
      {/* Gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
          skill.category
        )} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        initial={false}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200"
          animate={isHovered ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skill.icon}
        </motion.div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {skill.name}
        </h3>

        {/* Enhanced Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
          <motion.div
            className={`h-3 bg-gradient-to-r ${getCategoryColor(
              skill.category
            )} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Enhanced Level Indicator */}
        <div className="flex justify-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                i < skill.level ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
              animate={
                isHovered && i < skill.level
                  ? { scale: [1, 1.3, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3, delay: i * 0.1 }}
            />
          ))}
        </div>

        <motion.p
          className="text-sm text-gray-500 dark:text-gray-400 capitalize group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200"
          animate={isHovered ? { y: -2 } : { y: 0 }}
        >
          {skill.category}
        </motion.p>

        {/* Active state indicator */}
        {isActive && (
          <motion.div
            className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    </motion.div>
  );
}
