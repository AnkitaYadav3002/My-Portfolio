// components/Hero.jsx - Clean version without 3D background
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import profilePic from "../../public/Images/pic.jpg";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Floating Particles Component (Subtle background animation)
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    duration: Math.random() * 12 + 6,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/15 pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, -60, -30, 0],
            opacity: [0, 0.3, 0.5, 0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

const roles = ["Frontend Developer", "Full Stack Developer", "MERN Stack Developer"];

const Hero = () => {
  const heroRef = useRef(null);
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    
    if (!isDeleting && text !== currentRole) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100);
    } else if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text !== "") {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 50);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade out content on scroll
      gsap.to(".hero-content", {
        opacity: 0,
        y: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        }
      });
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/5 via-transparent to-pink-900/5" />
      
      {/* Floating Particles - Subtle background animation */}
      <FloatingParticles />
      
      {/* CONTENT SECTION - Mobile Responsive */}
      <motion.div 
        className="hero-content relative z-10 flex flex-col items-center text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        
        {/* Profile Image - Responsive sizing */}
        <motion.div 
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative mb-6 sm:mb-8 group"
        >
          <div className="absolute -inset-2 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-500/30 overflow-hidden shadow-2xl">
            <img 
              src={profilePic} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
              alt="Ankita Yadav" 
            />
          </div>
        </motion.div>

        {/* Animated Badge - Mobile text size */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <h2 className="text-purple-500 font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 bg-purple-500/10 px-3 sm:px-4 py-1 rounded-full inline-block">
            AVAILABLE FOR IMMEDIATE HIRE
          </h2>
        </motion.div>
        
        {/* Animated Name - Responsive text sizes */}
        <div className="overflow-hidden px-2">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2 sm:mb-4 leading-tight"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ANKITA{" "}
            <span className="hidden sm:inline"> </span>
            <br className="block sm:hidden" />
            <motion.span 
              className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 inline-block mt-1 sm:mt-0"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              YADAV
            </motion.span>
          </motion.h1>
        </div>

        {/* Typing Role - Mobile responsive */}
        <div className="h-12 sm:h-14 flex items-center justify-center px-2">
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide text-center"
          >
            <span className="hidden sm:inline">I am a </span>
            <span className="text-white font-semibold block sm:inline">{text}</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.5 sm:w-1 h-5 sm:h-8 bg-purple-500 ml-1"
            />
          </motion.p>
        </div>

        {/* Action Buttons - Mobile stacked */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-black rounded-xl shadow-[0_10px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_25px_rgba(139,92,246,0.5)] transition-all duration-300 text-center text-sm sm:text-base"
          >
            VIEW PROJECTS
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-transparent border border-white/30 text-white font-black rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all text-center text-sm sm:text-base"
          >
            CONTACT ME
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator - Hide on very small screens */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 cursor-pointer z-20 sm:flex"
        onClick={() => {
          gsap.to(window, { scrollTo: { y: window.innerHeight }, duration: 1, ease: "power2.inOut" });
        }}
      >
        <div className="w-px h-8 sm:h-12 bg-linear-to-b from-purple-500 to-transparent" />
        <span className="text-[10px] sm:text-xs text-gray-500 mt-2">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;