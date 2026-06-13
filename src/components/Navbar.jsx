import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/5 z-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-white">
        
        {/* 🔥 BRAND LOGO SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Logo Box with Shimmer Effect */}
          <div className="relative overflow-hidden flex items-center justify-center w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg rotate-3 group-hover:rotate-0 transition-all shadow-lg shadow-purple-500/20">
            {/* Shimmer Overlay */}
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            <span className="relative text-xl font-black tracking-tighter">AY</span>
          </div>
          
          <div className="leading-tight">
            <h1 className="text-lg font-black uppercase italic tracking-tight">
              Ankita <span className="text-purple-500">Yadav</span>
            </h1>
            <p className="text-[9px] font-bold text-gray-500 tracking-[0.2em] uppercase">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        {/* 💊 GLASS NAVIGATION PILL WITH UNDERSCORE */}
        <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full gap-8 shadow-inner">
          {["About", "Experience", "Projects", "Skills"].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              className="relative text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group/nav"
            >
              {link}
              {/* Animated Underscore */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
        </div>

        {/* 🔗 SOCIALS & CTA */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex gap-4 text-lg text-gray-500 border-r border-white/10 pr-5">
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
  );
};

export default Navbar;