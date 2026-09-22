import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data/portfolioData";

const TimelineItem = ({ exp, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`mb-12 flex justify-between items-center w-full ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block w-5/12" />

      <div className="z-20 flex items-center order-1 bg-[#0a0a0f] shadow-xl w-8 h-8 rounded-full border-4 border-[#7c3aed] shadow-[0_0_15px_rgba(124,58,237,0.5)]" />

      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={
          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
        className="order-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full md:w-5/12 hover:border-[#00d4ff]/50 transition-colors duration-300"
      >
        <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h3 className="font-bold text-xl text-[#00d4ff]">{exp.role}</h3>
          <span className="text-sm font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <h4 className="text-lg font-semibold text-white mb-4">{exp.company}</h4>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88]">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Glowing Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00d4ff] via-[#7c3aed] to-[#00ff88] md:-ml-[1px] opacity-50 timeline-line shadow-[0_0_10px_rgba(124,58,237,0.5)]" />

          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
