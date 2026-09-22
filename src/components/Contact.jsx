import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck, FaCopy } from 'react-icons/fa';
import { contactData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (name) => setFocused({ ...focused, [name]: true });
  const handleBlur = (name) => setFocused({ ...focused, [name]: formData[name] !== '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFocused({});
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
            Get In Touch
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">Feel free to reach out to me for any questions or opportunities.</p>
            </div>

            <div className="flex flex-col gap-6">
              <div 
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => handleCopy(contactData?.email, 'email')}
              >
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-[#00d4ff] group-hover:bg-[#00d4ff] group-hover:text-black transition-colors">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{contactData?.email || 'hello@example.com'}</p>
                </div>
                {copied === 'email' ? <FaCheck className="ml-auto text-[#00ff88]" /> : <FaCopy className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
              </div>

              <div 
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => handleCopy(contactData?.phone, 'phone')}
              >
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">{contactData?.phone || '+1 234 567 890'}</p>
                </div>
                {copied === 'phone' ? <FaCheck className="ml-auto text-[#00ff88]" /> : <FaCopy className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-[#00ff88]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">{contactData?.location || 'New York, USA'}</p>
                </div>
              </div>
            </div>

            {contactData?.socialLinks && (
              <div className="flex gap-4 mt-6">
                {contactData.socialLinks.map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#00d4ff] hover:to-[#7c3aed] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#00ff88]/20 rounded-full flex items-center justify-center mb-4 text-[#00ff88]">
                  <FaCheck className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] focus:shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all peer"
                      required
                    />
                    <label 
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused.name ? '-top-2.5 text-xs bg-[#0a0a0f] px-1 text-[#00d4ff]' : 'top-3.5 text-gray-400'
                      }`}
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] focus:shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all peer"
                      required
                    />
                    <label 
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused.email ? '-top-2.5 text-xs bg-[#0a0a0f] px-1 text-[#00d4ff]' : 'top-3.5 text-gray-400'
                      }`}
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={() => handleBlur('subject')}
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] focus:shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all peer"
                    required
                  />
                  <label 
                    htmlFor="subject"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused.subject ? '-top-2.5 text-xs bg-[#0a0a0f] px-1 text-[#00d4ff]' : 'top-3.5 text-gray-400'
                    }`}
                  >
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows="5"
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] focus:shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all resize-none peer"
                    required
                  ></textarea>
                  <label 
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused.message ? '-top-2.5 text-xs bg-[#0a0a0f] px-1 text-[#00d4ff]' : 'top-3.5 text-gray-400'
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                <button 
                  type="submit"
                  className="btn-ripple w-full py-4 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-shadow"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
