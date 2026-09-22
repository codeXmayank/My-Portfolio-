import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../data/portfolioData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered && testimonials && testimonials.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleNext = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 bg-[#0a0a0f] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
            What Clients Say
          </h2>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden relative h-[400px] sm:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl w-full">
                  <FaQuoteLeft className="text-4xl text-[#00d4ff] mb-6 opacity-50" />
                  <p className="text-xl md:text-2xl italic mb-8 text-gray-300">
                    "{testimonials[currentIndex]?.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonials[currentIndex]?.avatar} 
                        alt={testimonials[currentIndex]?.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#7c3aed]"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonials[currentIndex]?.name}</h4>
                        <p className="text-sm text-[#00ff88]">{testimonials[currentIndex]?.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white/10 hover:bg-[#7c3aed] text-white rounded-full backdrop-blur-sm transition-colors z-10"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white/10 hover:bg-[#7c3aed] text-white rounded-full backdrop-blur-sm transition-colors z-10"
          >
            <FaChevronRight />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#00d4ff]' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
