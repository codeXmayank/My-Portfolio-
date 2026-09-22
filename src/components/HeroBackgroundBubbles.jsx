import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiVite,
  SiRedis,
  SiFirebase,
} from 'react-icons/si';

const BACKGROUND_BUBBLES = [
  // Top-left sector
  {
    name: 'React',
    icon: FaReact,
    color: '#00d4ff',
    size: 68,
    style: { top: '8%', left: '3%' },
    floatY: [-18, 18],
    floatX: [-10, 10],
    duration: 8.5,
    delay: 0,
    opacity: 0.55,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178c6',
    size: 58,
    style: { top: '32%', left: '1%' },
    floatY: [-14, 16],
    floatX: [-8, 12],
    duration: 9.2,
    delay: 1.2,
    opacity: 0.5,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#ffffff',
    size: 62,
    style: { top: '56%', left: '3%' },
    floatY: [-16, 14],
    floatX: [8, -10],
    duration: 7.8,
    delay: 2.1,
    opacity: 0.5,
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38bdf8',
    size: 54,
    style: { top: '80%', left: '6%' },
    floatY: [-12, 14],
    floatX: [-10, 8],
    duration: 8.0,
    delay: 0.7,
    opacity: 0.45,
  },

  // Center / Upper-mid sector
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: '#22c55e',
    size: 64,
    style: { top: '6%', left: '34%' },
    floatY: [-15, 15],
    floatX: [-12, 10],
    duration: 9.6,
    delay: 1.8,
    opacity: 0.5,
  },
  {
    name: 'Vite',
    icon: SiVite,
    color: '#a855f7',
    size: 52,
    style: { top: '16%', left: '52%' },
    floatY: [-12, 16],
    floatX: [8, -12],
    duration: 7.4,
    delay: 2.5,
    opacity: 0.45,
  },
  {
    name: 'Python',
    icon: FaPython,
    color: '#facc15',
    size: 60,
    style: { bottom: '10%', left: '32%' },
    floatY: [-16, 12],
    floatX: [-8, 10],
    duration: 8.8,
    delay: 1.4,
    opacity: 0.5,
  },

  // Right / Upper-right sector
  {
    name: 'Docker',
    icon: FaDocker,
    color: '#0ea5e9',
    size: 66,
    style: { top: '7%', right: '5%' },
    floatY: [-18, 16],
    floatX: [10, -10],
    duration: 8.2,
    delay: 0.5,
    opacity: 0.55,
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: '#ff9900',
    size: 58,
    style: { top: '30%', right: '2%' },
    floatY: [-14, 18],
    floatX: [-10, 10],
    duration: 9.0,
    delay: 2.8,
    opacity: 0.5,
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
    color: '#ec4899',
    size: 54,
    style: { top: '54%', right: '1%' },
    floatY: [-12, 14],
    floatX: [8, -12],
    duration: 7.6,
    delay: 1.6,
    opacity: 0.45,
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#10b981',
    size: 60,
    style: { top: '78%', right: '4%' },
    floatY: [-16, 14],
    floatX: [-12, 8],
    duration: 8.6,
    delay: 3.2,
    opacity: 0.5,
  },

  // Lower center / extra accent bubbles
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791',
    size: 56,
    style: { bottom: '8%', right: '35%' },
    floatY: [-14, 16],
    floatX: [10, -8],
    duration: 9.4,
    delay: 2.0,
    opacity: 0.45,
  },
  {
    name: 'Git',
    icon: FaGitAlt,
    color: '#f05032',
    size: 50,
    style: { top: '2%', left: '72%' },
    floatY: [-10, 14],
    floatX: [-8, 8],
    duration: 7.2,
    delay: 1.0,
    opacity: 0.45,
  },
  {
    name: 'Figma',
    icon: FaFigma,
    color: '#f24e1e',
    size: 48,
    style: { bottom: '16%', left: '49%' },
    floatY: [-12, 12],
    floatX: [-6, 8],
    duration: 8.0,
    delay: 2.2,
    opacity: 0.4,
  },
  {
    name: 'Redis',
    icon: SiRedis,
    color: '#dc2626',
    size: 48,
    style: { top: '88%', right: '22%' },
    floatY: [-10, 12],
    floatX: [8, -6],
    duration: 7.9,
    delay: 3.0,
    opacity: 0.4,
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: '#f58220',
    size: 50,
    style: { top: '12%', left: '19%' },
    floatY: [-14, 12],
    floatX: [-6, 10],
    duration: 8.4,
    delay: 1.5,
    opacity: 0.45,
  },
];

const HeroBackgroundBubbles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {BACKGROUND_BUBBLES.map((bubble) => {
        const Icon = bubble.icon;

        return (
          <motion.div
            key={bubble.name}
            style={{
              position: 'absolute',
              ...bubble.style,
              width: bubble.size,
              height: bubble.size,
            }}
            animate={{
              y: [bubble.floatY[0], bubble.floatY[1], bubble.floatY[0]],
              x: [bubble.floatX[0], bubble.floatX[1], bubble.floatX[0]],
              rotate: [-4, 4, -4],
              scale: [0.96, 1.04, 0.96],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bubble.delay,
            }}
            className="pointer-events-auto group cursor-default select-none"
          >
            {/* Ambient Radial Colored Glow Aura */}
            <motion.div
              className="absolute -inset-2 rounded-full opacity-35 blur-md pointer-events-none group-hover:opacity-85 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, ${bubble.color} 0%, transparent 70%)`,
              }}
              animate={{
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: bubble.duration * 0.7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: bubble.delay,
              }}
            />

            {/* Translucent Glass Bubble Body */}
            <div
              className="relative w-full h-full rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 group-hover:scale-110 group-hover:border-white/40"
              style={{
                background: `radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(10, 10, 20, 0.7) 100%)`,
                border: `1.5px solid rgba(255, 255, 255, 0.15)`,
                boxShadow: `
                  inset 0 2px 5px rgba(255, 255, 255, 0.25),
                  inset 0 -4px 8px rgba(0, 0, 0, 0.5),
                  0 6px 20px rgba(0, 0, 0, 0.4)
                `,
                opacity: bubble.opacity,
              }}
            >
              {/* Specular Bubble Glare Arc (Top-left reflection) */}
              <div
                className="absolute top-1.5 left-2 rounded-full pointer-events-none"
                style={{
                  width: bubble.size * 0.35,
                  height: bubble.size * 0.18,
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  transform: 'rotate(-30deg)',
                  filter: 'blur(0.5px)',
                }}
              />

              {/* Bottom reflection tint */}
              <div
                className="absolute bottom-1.5 right-2 rounded-full pointer-events-none opacity-25"
                style={{
                  width: bubble.size * 0.2,
                  height: bubble.size * 0.1,
                  background: bubble.color,
                  filter: 'blur(1px)',
                }}
              />

              {/* Framework Icon inside Bubble */}
              <div
                className="relative z-10 transition-transform duration-300 group-hover:scale-115"
                style={{
                  color: bubble.color,
                  filter: `drop-shadow(0 0 6px ${bubble.color}88)`,
                }}
              >
                <Icon style={{ fontSize: bubble.size * 0.44 }} />
              </div>
            </div>

            {/* Hover Tooltip Pill */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono text-white backdrop-blur-md border border-white/20 shadow-lg"
                style={{
                  background: 'rgba(10, 10, 20, 0.9)',
                  borderColor: `${bubble.color}88`,
                }}
              >
                {bubble.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeroBackgroundBubbles;
