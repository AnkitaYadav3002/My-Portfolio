import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profilePic from "../../public/Images/pic.jpg";

// Updated roles to match your resume strengths
const roles = ["Full Stack Developer", "MERN Stack Specialist"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => roles[roleIndex].slice(0, prev.length + 1));

      if (text === roles[roleIndex]) {
        setTimeout(() => {
          setText("");
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500); // Slightly longer pause for readability
      }
    }, 80); // Smoother typing speed

    return () => clearInterval(interval);
  }, [text, roleIndex]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* 🌌 BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        {/* Animated Radial Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/20 blur-[120px] rounded-full"
        />
        
        {/* Rotating Rings to match the 'AY' box rotation */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 border border-dashed border-white/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 border border-dashed border-purple-500/10 rounded-full"
        />
      </div>

      {/* 🚀 CONTENT SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        
        {/* 👩 PROFILE IMAGE with Glass Glow */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative mb-8 group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-48 h-48 rounded-full border-4 border-black overflow-hidden shadow-2xl">
            <img 
              src={profilePic} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Ankita Yadav" 
            />
          </div>
        </motion.div>

        {/* 👋 MAIN TITLES */}
        <h2 className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase mb-4 opacity-80">
          Available for Immediate Hire
        </h2>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-tight px-5">
          ANKITA <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 italic">YADAV</span>
        </h1>

        {/* ✨ DYNAMIC TYPING ROLE */}
        <div className="h-12 flex items-center justify-center">
          <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
            I am a <span className="text-white font-semibold">{text}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-8 bg-purple-500 ml-1"
            />
          </p>
        </div>

        {/* 🛠️ ACTION BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black font-black rounded-xl shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            VIEW PROJECTS
          </motion.a>
          
          <motion.a 
            href="mailto:ankita302002@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-10 py-4 bg-transparent border border-white/20 text-white font-black rounded-xl hover:bg-white/5 backdrop-blur-sm transition-all"
          >
            CONTACT ME
          </motion.a>
        </div>
      </motion.div>

      {/* 🖱️ SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
      >
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;