import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { heroData } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import HeroTechCard from "./HeroTechCard";
import HeroBackgroundBubbles from "./HeroBackgroundBubbles";

const Hero = () => {
  const titles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Tech Innovator",
    "Open Source Contributor",
    "Problem Solver",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = titles[currentTitleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const descriptionWords = (
    heroData.description ||
    "I craft pixel-perfect, performance-driven web experiences blending cutting-edge tech with fluid interactive design."
  ).split(" ");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialIcons = [
    { icon: FaGithub, href: "https://github.com/codeXmayank", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaDribbble, href: "https://dribbble.com", label: "Dribbble" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] pt-24 pb-16"
    >
      {/* Background Animated Grid & Ambient Lights */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff15_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff15_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      </div>

      {/* Animated Framework Icon Bubbles in Background */}
      <HeroBackgroundBubbles />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro Text & CTAs (7 cols on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start justify-center"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
                Available for New Projects • 2024
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none"
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text">Mayank Kumar.</span>
            </motion.h1>

            {/* Dynamic Typing Title */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-bold text-gray-300 mb-6 min-h-[44px] sm:min-h-[52px] flex items-center font-mono"
            >
              <span className="text-[#00d4ff]">&gt;&nbsp;</span>
              <span>{currentText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 h-[1.1em] bg-[#00d4ff] ml-1 align-middle"
              />
            </motion.h2>

            {/* Staggered Description */}
            <motion.div
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
            >
              {descriptionWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-1.5"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection("tech-stack")}
                className="btn-ripple bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-bold py-3.5 px-8 rounded-xl hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-all duration-300 relative overflow-hidden active:scale-95"
              >
                Explore Tech Cards
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-ripple border border-[#00d4ff]/60 text-[#00d4ff] font-semibold py-3.5 px-6 rounded-xl hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 active:scale-95 flex items-center gap-2 font-mono text-sm"
              >
                <span>Featured Projects</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-ripple border border-white/20 text-gray-300 font-medium py-3.5 px-6 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300 active:scale-95 text-sm"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                Connect:
              </span>
              <div className="flex gap-4">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 text-lg transition-all duration-300 shadow-sm"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Tech Terminal Card (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            <HeroTechCard />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 text-gray-400 hover:text-[#00d4ff] transition-colors"
        onClick={() => scrollToSection("tech-stack")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">
          Scroll Down
        </span>
        <svg
          className="w-5 h-5 text-[#00d4ff]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
