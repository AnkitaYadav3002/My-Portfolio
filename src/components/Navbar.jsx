import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = ["About", "Experience", "Skills", "Projects", "Contact"];

  const handleLinkClick = (link) => {
    setIsOpen(false);
    const element = document.getElementById(link.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-black/40 backdrop-blur-sm border-b border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-white">
          
          {/* BRAND LOGO SECTION - Now visible on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative overflow-hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg rotate-3 group-hover:rotate-0 transition-all shadow-lg shadow-purple-500/20">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <span className="relative text-base sm:text-xl font-black tracking-tighter">AY</span>
            </div>
            
            {/* Brand name - Now always visible, responsive text size */}
            <div className="leading-tight">
              <h1 className="text-xs sm:text-sm md:text-lg font-black uppercase italic tracking-tight">
                Ankita <span className="text-purple-500">Yadav</span>
              </h1>
              <p className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] font-bold text-gray-500 tracking-widest sm:tracking-[0.15em] md:tracking-[0.2em] uppercase">
                Full Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-4 lg:px-6 py-2 rounded-full gap-6 lg:gap-8 shadow-inner">
            {navLinks.map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="relative text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group/nav"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover/nav:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none z-50 relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop Socials & CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex gap-4 text-lg text-gray-500 border-r border-white/10 pr-5">
              <motion.a 
                whileHover={{ y: -2, color: "#fff" }} 
                href="https://github.com/AnkitaYadav3002"
                target="_blank" 
                rel="noreferrer"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, color: "#0077b5" }} 
                href="https://linkedin.com/in/ankita-yadav30"
                target="_blank" 
                rel="noreferrer"
              >
                <FaLinkedin />
              </motion.a>
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ankita302002@gmail.com"
              className="px-5 py-2 bg-white text-black text-[11px] font-black rounded-full hover:bg-purple-600 hover:text-white transition-all shadow-lg uppercase"
            >
              Let's Talk
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden"
            style={{ top: "60px" }}
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="flex flex-col items-center justify-center h-full gap-6 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleLinkClick(link)}
                  className="text-2xl font-bold uppercase tracking-wider text-gray-300 hover:text-purple-400 transition-colors py-2"
                >
                  {link}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 mt-8 pt-8 border-t border-white/10"
              >
                <a 
                  href="https://github.com/AnkitaYadav3002"
                  target="_blank" 
                  rel="noreferrer"
                  className="text-3xl text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/ankita-yadav30"
                  target="_blank" 
                  rel="noreferrer"
                  className="text-3xl text-gray-400 hover:text-[#0077b5] transition-colors"
                >
                  <FaLinkedin />
                </a>
              </motion.div>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="mailto:ankita302002@gmail.com"
                className="mt-4 px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;