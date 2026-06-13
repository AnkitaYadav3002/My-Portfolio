// components/Projects.jsx - Enhanced with GSAP parallax and 3D card effects
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectData = [
  {
    title: "Proto D Engineering – ERP System",
    tags: ["React.js", "TypeScript", "Node.js", "Express.js", "Sequelize ORM", "Tailwind CSS", "JWT", "MySQL"],
    desc: "Engineered a full-stack ERP system with 7 modules including Inventory, Production, and Reporting, improving operational efficiency.",
    features: [
      "Authentication and Authorization using JWT and RBAC",
      "Integrated multiple REST APIs for real-time workflow automation",
      "Designed normalized database schema using Sequelize ORM and MySQL"
    ],
    role: "Full Stack Developer",
    timeline: "Feb 2025 – Present",
    gradient: "from-purple-600/20 to-pink-600/20",
    icon: "🏭"
  },
  {
    title: "FinOracles – Admin Panel",
    tags: ["React.js", "Vite", "Tailwind CSS", "REST API", "Axios"],
    desc: "Built admin dashboard UI with reusable components and API integration for dynamic data display.",
    features: [
      "Performed API Integration for dynamic data display",
      "Improved UI performance and responsiveness across devices",
      "Created reusable React.js components for admin dashboards"
    ],
    role: "React.js Developer Intern",
    timeline: "Nov 2024 – Jan 2025",
    gradient: "from-cyan-600/20 to-blue-600/20",
    icon: "📊"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax effect for cards
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.to(card, {
            y: 30,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            }
          });
        }
      });
      
      // Staggered card entrance
      gsap.fromTo(cardsRef.current.filter(Boolean),
        { 
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32 bg-linear-to-b from-[#050505] to-black text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C27B0' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-500">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Real-world applications I've built</p>
          <motion.div 
            className="h-0.5 w-16 sm:w-20 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
            animate={{ width: ["40px", "80px", "40px"] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projectData.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group"
            >
              <div className={`relative p-6 sm:p-8 rounded-2xl bg-linear-to-br ${project.gradient} border border-white/10 transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5 backdrop-blur-sm`}>
                
                <div className="relative z-10">
                  {/* Header with icon and timeline */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl">{project.icon}</span>
                      <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 text-[10px] sm:text-xs rounded-full border border-purple-500/30 font-semibold">
                        {project.role}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-500 font-mono">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Tech tags with hover animations */}
                  <div className="flex gap-1.5 sm:gap-2 mb-4 flex-wrap">
                    {project.tags.slice(0, 6).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-1.5 sm:px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[8px] sm:text-[10px] rounded border border-purple-500/20 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="px-1.5 sm:px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[8px] sm:text-[10px] rounded border border-purple-500/20 font-mono">
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-[10px] sm:text-xs text-purple-300 font-semibold mb-2 uppercase tracking-wider">
                      Key Achievements
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-gray-400 text-xs sm:text-sm flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-0.5">▹</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack footer */}
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <p className="text-[8px] sm:text-[10px] text-gray-600 uppercase tracking-wider">Tech Stack</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                      {project.tags.slice(0, 4).join(" • ")}
                      {project.tags.length > 4 && " • +" + (project.tags.length - 4)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 rounded-full border border-white/10">
            <span className="text-xl sm:text-2xl">🏆</span>
            <p className="text-gray-400 text-xs sm:text-sm">
              <strong className="text-purple-400">15+ full-stack features</strong> developed & 
              <strong className="text-purple-400 ml-1">10+ REST APIs</strong> built with JWT authentication
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;