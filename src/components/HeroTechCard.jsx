import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const QUICK_STACK = [
  { icon: FaReact, name: "React", color: "#00d4ff" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { icon: FaNodeJs, name: "Node.js", color: "#22c55e" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
  { icon: FaPython, name: "Python", color: "#facc15" },
  { icon: FaDocker, name: "Docker", color: "#0ea5e9" },
  { icon: SiPostgresql, name: "Postgres", color: "#336791" },
];

const HeroTechCard = () => {
  const [activeTab, setActiveTab] = useState("stack.ts");

  const scrollToTechStack = () => {
    const el = document.getElementById("tech-stack");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00d4ff]/30 via-[#7c3aed]/30 to-[#00ff88]/30 blur-xl opacity-50" />

      {/* Cyberpunk Terminal Window */}
      <div className="relative rounded-2xl bg-[#0d111a]/95 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="text-xs font-mono text-gray-400 ml-2">
              mayank@core:~/dev
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <button
              onClick={() => setActiveTab("stack.ts")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "stack.ts"
                  ? "bg-[#00d4ff]/15 text-[#00d4ff] border border-[#00d4ff]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              stack.ts
            </button>
            <button
              onClick={() => setActiveTab("status.json")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "status.json"
                  ? "bg-[#7c3aed]/15 text-[#7c3aed] border border-[#7c3aed]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              status.json
            </button>
          </div>
        </div>

        {/* Code Body */}
        <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-gray-300">
          {activeTab === "stack.ts" ? (
            <div>
              <div className="text-gray-500 mb-2">
                // Core Architecture & Engineering Profile
              </div>
              <div>
                <span className="text-[#ec4899]">const</span>{" "}
                <span className="text-[#00d4ff]">DeveloperProfile</span> =
                &#123;
              </div>
              <div className="pl-4">
                <span className="text-gray-400">engineer:</span>{" "}
                <span className="text-[#00ff88]">'Mayank Kumar'</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">role:</span>{" "}
                <span className="text-[#00ff88]">'Full Stack Developer'</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">experience:</span>{" "}
                <span className="text-[#facc15]">'6+ Months'</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">focus:</span> [
                <span className="text-[#38bdf8]">'High Performance'</span>,{" "}
                <span className="text-[#38bdf8]">'Clean UI/UX'</span>,{" "}
                <span className="text-[#38bdf8]">'Scalability'</span>],
              </div>
              <div className="pl-4">
                <span className="text-gray-400">passion:</span>{" "}
                <span className="text-[#00ff88]">
                  'Crafting Next-Gen Web Solutions'
                </span>
                ,
              </div>
              <div>&#125;;</div>
            </div>
          ) : (
            <div>
              <div className="text-gray-500 mb-2">// System Live Telemetry</div>
              <div>&#123;</div>
              <div className="pl-4">
                <span className="text-[#00d4ff]">"uptime"</span>:{" "}
                <span className="text-[#00ff88]">"99.98%"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#00d4ff]">"projectsShipped"</span>:{" "}
                <span className="text-[#facc15]">50</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#00d4ff]">"happyClients"</span>:{" "}
                <span className="text-[#facc15]">30</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#00d4ff]">"availability"</span>:{" "}
                <span className="text-[#00ff88]">"Available"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#00d4ff]">"codeQuality"</span>:{" "}
                <span className="text-[#00ff88]">
                  "A+ / Strict Type Safety"
                </span>
              </div>
              <div>&#125;</div>
            </div>
          )}
        </div>

        {/* Quick Tech Icon Matrix Bar */}
        <div className="px-5 sm:px-6 py-4 bg-white/[0.02] border-t border-white/10">
          <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              Primary Stack
            </span>
            <button
              onClick={scrollToTechStack}
              className="text-[#00d4ff] hover:underline flex items-center gap-1"
            >
              <span>Explore All Cards</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {QUICK_STACK.map((tech) => (
              <motion.button
                key={tech.name}
                onClick={scrollToTechStack}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d4ff]/50 transition-colors group"
                title={`Click to view ${tech.name} specification`}
              >
                <tech.icon
                  className="text-xl mb-1 transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-[10px] font-mono text-gray-400 group-hover:text-white truncate max-w-full">
                  {tech.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Terminal Status Bar */}
        <div className="px-4 py-2 bg-black/50 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-[#00ff88]">●</span> UTF-8 &bull; React 18
            &bull; Tailwind CSS
          </span>
          <span className="text-gray-400">Click icon to inspect</span>
        </div>
      </div>
    </div>
  );
};

export default HeroTechCard;
