"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/data";
import { Experience } from "@/types";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Users,
  TrendingUp,
  Clock,
  Star,
  ChevronRight,
  Building,
  Code,
  Rocket,
  Target,
} from "lucide-react";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExperience, setActiveExperience] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      icon: Briefcase,
      label: "Companies",
      value: "5+",
      color: "text-blue-500",
    },
    { icon: Award, label: "Projects", value: "50+", color: "text-green-500" },
    { icon: Users, label: "Team Size", value: "10+", color: "text-purple-500" },
    {
      icon: TrendingUp,
      label: "Growth",
      value: "200%",
      color: "text-orange-500",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-slate-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2RjEiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -35, 0],
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-36 h-36 bg-indigo-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
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
            <Briefcase className="w-5 h-5" />
            <span>Professional Journey</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A journey through my professional growth, showcasing key milestones
            and achievements in my career.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-200">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline Navigation */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Clock className="w-6 h-6 text-blue-500 mr-3" />
              Career Timeline
            </h3>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeExperience === index
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 shadow-lg"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg"
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveExperience(index)}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-6 bg-gray-200 dark:bg-gray-700" />
                )}

                <div className="flex items-start space-x-4">
                  <div
                    className={`w-4 h-4 rounded-full mt-2 ${
                      activeExperience === index
                        ? "bg-blue-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                        {experience.position}
                      </h4>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeExperience === index
                            ? "rotate-90 text-blue-500"
                            : "text-gray-400"
                        }`}
                      />
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            className="sticky top-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-700">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experiences[activeExperience].position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {experiences[activeExperience].company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-8 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experiences[activeExperience].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experiences[activeExperience].location}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <Target className="w-5 h-5 text-green-500 mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experiences[activeExperience].responsibilities.map(
                      (responsibility, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experiences[activeExperience].achievements.map(
                      (achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <Code className="w-5 h-5 text-purple-500 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].technologies.map(
                      (tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>

                {experiences[activeExperience].website && (
                  <motion.a
                    href={experiences[activeExperience].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Company</span>
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Career Highlights */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-10 border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-blue-500 mr-3" />
              Career Highlights
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Key milestones and achievements throughout my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Career Growth",
                description:
                  "Consistent progression from Junior to Senior roles",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Users,
                title: "Team Leadership",
                description: "Led cross-functional teams of 5+ developers",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Award,
                title: "Project Success",
                description: "Delivered 50+ successful projects on time",
                color: "from-purple-500 to-pink-500",
              },
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center group cursor-pointer border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
