import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, projectCategories } from "../data/portfolioData";

// Helper function to safely get categories as an array
const getProjectCategories = (project) => {
  const cats = project.category || project.categories || [];
  if (Array.isArray(cats)) return cats;
  if (typeof cats === "string") {
    return cats
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);
  }
  return [];
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => {
          const cats = getProjectCategories(project);
          return cats.some((c) => c.toLowerCase() === activeTab.toLowerCase());
        });

  return (
    <section
      id="projects"
      className="py-20 bg-[#0a0a0f] min-h-screen relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88]">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTab === category
                    ? "bg-[#7c3aed]/20 border-[#7c3aed] text-[#00d4ff] shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-[#00d4ff]/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5
                 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all 
                 duration-500 flex flex-col h-full"
                style={{ borderTop: `4px solid ${project.color || "#00d4ff"}` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill transition-transform duration-700
                     group-hover:scale-110"
                  />
                  {/* Category Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                    {getProjectCategories(project).map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#0a0a0f]/80 backdrop-blur-md text-[#00d4ff] border border-white/10 shadow-md tracking-wide"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 z-20 bg-[#0a0a0f]/80 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-[#7c3aed]/50 text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <FaGithub className="text-xl" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-[#00ff88]/50 text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#00ff88] text-sm font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
