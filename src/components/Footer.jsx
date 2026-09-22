import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import { navLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  ];

  return (
    <footer className="bg-[#050508] text-white relative z-10">
      <div className="h-1 w-full bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88]"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo */}
          <motion.div 
            className="text-3xl font-bold tracking-wider cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88]">
              MK
            </span>
          </motion.div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, idx) => (
              <motion.button
                key={idx}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ y: -2, color: '#00d4ff' }}
                className="text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -3 }}
                className="text-gray-400 hover:text-[#00d4ff] transition-colors text-xl"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mayank Kumar. Crafted with ❤️ and lots of ☕
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)' }}
            className="w-10 h-10 bg-white/5 hover:bg-[#00d4ff]/20 border border-white/10 hover:border-[#00d4ff]/50 rounded-full flex items-center justify-center text-[#00d4ff] transition-all duration-300"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
