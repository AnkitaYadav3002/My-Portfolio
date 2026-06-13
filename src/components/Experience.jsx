// components/Experience.jsx - Enhanced with GSAP timeline animations (Mobile Responsive)
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Skylynx Technologies LLP, Satara",
    period: "Feb 2025 - Present",
    desc: [
      "Developed 15+ full-stack features using React.js, Node.js, and Express.js",
      "Built 10+ REST APIs with JWT authentication and RBAC authorization",
      "Designed and managed MySQL database schemas and optimized SQL queries",
      "Improved UI performance and responsiveness by 25% using Tailwind CSS and Vite"
    ],
    icon: "💻"
  },
  {
    role: "React.js Developer Intern",
    company: "Skylynx Technologies LLP, Satara",
    period: "Nov 2024 - Jan 2025",
    desc: [
      "Created reusable React.js components for admin dashboards",
      "Integrated REST APIs using Axios for real-time data rendering",
      "Improved application structure using React Router and modular architecture"
    ],
    icon: "🚀"
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only run desktop timeline animation on larger screens
      if (window.innerWidth >= 768) {
        // Create a timeline for the connection line
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          }
        });
        
        tl.fromTo(".timeline-line", 
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 1 }
        );
      }
      
      // Animate each card as it comes into view (works on both desktop and mobile)
      gsap.utils.toArray(".exp-card").forEach((card, i) => {
        // On mobile, use simpler animation
        const isMobile = window.innerWidth < 768;
        gsap.fromTo(card,
          { opacity: 0, y: isMobile ? 30 : 0, x: isMobile ? 0 : (i % 2 === 0 ? -50 : 50), scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.6 : 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-16 sm:py-24 md:py-32 bg-black text-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-500"
        >
          Professional Journey
        </motion.h2>
        
        {/* Timeline container */}
        <div ref={timelineRef} className="relative">
          {/* Vertical timeline line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-full overflow-hidden">
            <div className="timeline-line w-full h-full bg-linear-to-b from-purple-500 via-pink-500 to-purple-500 origin-top" />
          </div>
          
          {/* Desktop view - remains exactly as you had it */}
          <div className="hidden md:block space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`exp-card relative flex flex-row items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot with pulse animation */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-purple-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>
                
                {/* Content card */}
                <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden group"
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{exp.icon}</span>
                      <span className="text-purple-400 font-mono text-sm uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mt-2 group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                    <p className="text-gray-400 mb-4">{exp.company}</p>
                    <ul className="space-y-2 text-gray-300">
                      {exp.desc.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-purple-400 mt-1">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view - Stacked layout */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card relative">
                {/* Mobile timeline line (left side) */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-full" />
                
                {/* Mobile dot */}
                <div className="absolute left-0 top-5 w-6 h-6 bg-purple-500 rounded-full z-10 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-xs">{exp.icon}</span>
                </div>
                
                {/* Content card - stacked layout for mobile */}
                <div className="ml-10">
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
                    
                    {/* Mobile header */}
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <span className="text-purple-400 font-mono text-xs uppercase tracking-wider bg-purple-500/10 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mt-2 group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                    
                    <ul className="space-y-2 text-gray-300">
                      {exp.desc.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-xs sm:text-sm"
                        >
                          <span className="text-purple-400 mt-1 shrink-0">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Decorative gradient line on the left for mobile */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-purple-500 to-pink-500 rounded-l-2xl" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile swipe hint */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-xs mt-6 md:hidden"
        >
          ↓ Scroll for more experience ↓
        </motion.p>
      </div>
    </section>
  );
};

export default Experience;