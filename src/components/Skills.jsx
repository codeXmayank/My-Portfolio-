import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/portfolioData';

const ProgressBar = ({ level, color }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        transition: { duration: 1.5, ease: "easeOut" }
      });
    }
  }, [controls, inView, level]);

  const colorMap = {
    'cyan': "from-[#00d4ff] to-blue-500",
    '#00d4ff': "from-[#00d4ff] to-blue-500",
    'purple': "from-[#7c3aed] to-pink-500",
    '#7c3aed': "from-[#7c3aed] to-pink-500",
    'green': "from-[#00ff88] to-emerald-500",
    '#00ff88': "from-[#00ff88] to-emerald-500",
    'default': "from-[#00d4ff] to-[#7c3aed]"
  };

  const gradientClass = colorMap[color] || colorMap.default;

  return (
    <div className="w-full bg-gray-800 rounded-full h-2.5 mt-2 overflow-hidden" ref={ref}>
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        className={`h-2.5 rounded-full bg-gradient-to-r ${gradientClass}`}
      ></motion.div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fallbackCategories = [
    {
      title: "Frontend",
      color: "cyan",
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Framer Motion", level: 75 }
      ]
    },
    {
      title: "Backend",
      color: "purple",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & DevOps",
      color: "green",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 }
      ]
    }
  ];

  const categories = skillCategories || fallbackCategories;

  const getColorName = (color) => {
    if (color === '#00d4ff' || color === 'cyan') return 'cyan';
    if (color === '#7c3aed' || color === 'purple') return 'purple';
    if (color === '#00ff88' || color === 'green') return 'green';
    return 'cyan';
  };

  const getBorderColor = (color) => {
    const name = getColorName(color);
    switch(name) {
      case 'cyan': return 'hover:border-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]';
      case 'purple': return 'hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]';
      case 'green': return 'hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]';
      default: return 'hover:border-[#00d4ff]';
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0a0f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">My Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 ${getBorderColor(category.color)}`}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <ProgressBar level={skill.level} color={category.color} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
