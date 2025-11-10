"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  Phone,
  Heart,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Clock,
  User,
  MessageSquare,
  ArrowRight,
  Copy,
  Check,
  Download,
} from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDownloadingResume, setIsDownloadingResume] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with fun animation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("shahzebjadoon0@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleResumeDownload = () => {
    setIsDownloadingResume(true);
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update this path to your actual resume file
    link.download = "Shahzeb_Jadoon_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset downloading state after animation
    setTimeout(() => setIsDownloadingResume(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shahzebjadoon0@gmail.com",
      description: "Send me an email anytime",
      color: "from-red-500 to-pink-500",
      action: copyEmail,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92333 5238812",
      description: "Call me for urgent matters",
      color: "from-green-500 to-emerald-500",
      action: () => window.open("tel:+923335238812"),
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Pakistan",
      description: "Based in Lahore, Pakistan",
      color: "from-blue-500 to-cyan-500",
      action: () => window.open("https://maps.google.com/?q=Lahore,Pakistan"),
    },
    {
      icon: Download,
      title: "Resume",
      value: "Download PDF",
      description: "Get my latest resume",
      color: "from-purple-500 to-indigo-500",
      action: handleResumeDownload,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jadoon9",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shahzeb-jadoon-8bb2949b/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:shahzebjadoon0@gmail.com",
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden"
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
            <Heart className="w-5 h-5" />
            <span>Let&apos;s Connect</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MessageSquare className="w-8 h-8 text-blue-500 mr-3" />
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${
                        method.color
                      } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${
                        method.title === "Resume" && isDownloadingResume
                          ? "animate-pulse"
                          : ""
                      }`}
                    >
                      {method.title === "Resume" && isDownloadingResume ? (
                        <motion.div
                          className="w-7 h-7 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <method.icon className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {method.title === "Resume" && isDownloadingResume
                          ? "Downloading..."
                          : method.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {method.description}
                      </p>
                    </div>
                    {method.title === "Email" && (
                      <div className="flex items-center space-x-2">
                        {copiedEmail ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                        )}
                      </div>
                    )}
                    {method.title === "Resume" && isDownloadingResume && (
                      <div className="flex items-center space-x-2">
                        <motion.div
                          className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <User className="w-6 h-6 text-blue-500 mr-2" />
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6 text-blue-500" />
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Quick Response Guarantee
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I typically respond within 24 hours. For urgent matters, feel
                free to call me directly!
              </p>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Send className="w-6 h-6 text-blue-500 mr-3" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setHoveredField("name")}
                    onBlur={() => setHoveredField(null)}
                    required
                    className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setHoveredField("email")}
                    onBlur={() => setHoveredField(null)}
                    required
                    className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setHoveredField("message")}
                    onBlur={() => setHoveredField(null)}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 relative overflow-hidden ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                  }`}
                  whileHover={
                    !isSubmitting && !isSubmitted ? { scale: 1.02, y: -2 } : {}
                  }
                  whileTap={
                    !isSubmitting && !isSubmitted ? { scale: 0.98 } : {}
                  }
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
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
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Status */}
              {isSubmitted && (
                <motion.div
                  className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Thank you! I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Fun Interactive Section */}
        <motion.div
          className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-blue-500 mr-3" />
              Why Work With Me?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Here&apos;s what makes our collaboration special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Response",
                description: "Usually within 24 hours",
                color:
                  "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
              },
              {
                icon: "💡",
                title: "Creative Solutions",
                description: "Innovative approaches to problems",
                color:
                  "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
              },
              {
                icon: "🤝",
                title: "Collaborative",
                description: "Working together for success",
                color:
                  "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl text-center group cursor-pointer border border-gray-200 dark:border-gray-700`}
                whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
