// components/Skills.jsx - Enhanced with GSAP scroll-triggered animations
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiMysql, SiExpress, SiMongodb, SiRedux
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", level: 85 },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", level: 88 },
  { name: "React", icon: <FaReact />, color: "text-cyan-400", level: 92 },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400", level: 85 },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", level: 75 },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", level: 85 },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300", level: 85 },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", level: 80 },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600", level: 82 },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500", level: 75 },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400", level: 85 },
  { name: "REST API", icon: <FaDatabase />, color: "text-blue-400", level: 88 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards with stagger on scroll
      gsap.fromTo(skillRefs.current,
        { 
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotationX: 15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "back.out(0.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 bg-linear-to-b from-black to-[#050505] relative">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-500">
            Expertise
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                
                <div className={`text-5xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                
                {/* Skill level bar */}
                <div className="w-full mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "15+", label: "Projects Completed" },
            { value: "25%", label: "Performance Boost" },
            { value: "10+", label: "APIs Built" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Skills;