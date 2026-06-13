// components/About.jsx - Enhanced with GSAP scroll-triggered animations
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for decorative elements
      gsap.to(".about-glow", {
        y: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Staggered text reveal on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".about-text p",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" }
          );
        },
        once: true
      });
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 text-white bg-linear-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="about-glow absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-purple-500"
        >
          Professional Journey
        </motion.h2>

        <div ref={textRef} className="about-text space-y-8 text-lg leading-relaxed text-gray-300">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I am a <strong className="text-purple-400 relative inline-block">
              Full Stack Developer
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </strong> with over a year of professional experience building robust web applications. 
            I specialize in the <strong className="text-purple-400">MERN stack</strong>, with a deep focus on creating secure systems using <strong className="text-purple-400">JWT authentication</strong> and 
            <strong className="text-purple-400"> Role-Based Access Control (RBAC)</strong>.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            My expertise lies in bridging the gap between elegant frontend interfaces and scalable backend architectures. 
            I have a proven track record of improving UI performance by <strong className="text-purple-400 relative">
              25%
              <motion.span 
                className="absolute -top-5 -right-6 text-xs bg-purple-500/30 px-1 rounded"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.7, type: "spring" }}
              >
                ↑
              </motion.span>
            </strong> and engineering complex ERP systems from the ground up.
          </motion.p>
        </div>
        
        {/* Decorative quote line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100px" } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default About;