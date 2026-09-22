import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutData } from '../data/portfolioData';

// Helper component for animated counting
const Counter = ({ target, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    let start = 0;
    let end = parseInt(target.substring(0, target.length - suffix.length)); 
    if (start === end) return;
    
    // Fallback if target parsing isn't direct
    if (isNaN(end)) end = parseInt(target) || 0;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur * 1000) / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    if (!inView) {
      clearInterval(timer);
      setCount(0);
    }

    return () => clearInterval(timer);
  }, [target, duration, inView, suffix]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stats = [
    { label: "Projects", target: "50", suffix: "+" },
    { label: "Clients", target: "30", suffix: "+" },
    { label: "Years", target: "5", suffix: "+" },
    { label: "Lines of Code", target: "15", suffix: "K+" }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#0a0a0f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
            }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00d4ff] border-r-[#7c3aed] shadow-[0_0_30px_rgba(0,212,255,0.5)]"
              ></motion.div>
              <img 
                src={aboutData?.image} 
                alt="Mayank Kumar - Profile" 
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover z-10"
              />
            </div>
          </motion.div>

          {/* Bio & Stats */}
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={variants}
            className="w-full lg:w-2/3"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              {aboutData && aboutData.bio ? (
                aboutData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>Hello! I am a passionate developer with a knack for building beautiful and scalable web applications. I love turning complex problems into simple, beautiful, and intuitive designs.</p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#00d4ff]/50 transition-colors">
                  <div className="text-3xl font-bold text-[#00d4ff] mb-2">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="section-divider absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c3aed]/50 to-transparent"></div>
    </section>
  );
};

export default About;
