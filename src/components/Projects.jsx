import { motion } from "framer-motion";

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
    timeline: "Feb 2025 – Present"
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
    timeline: "Nov 2024 – Jan 2025"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-linear-to-b from-[#050505] to-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-500">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Real-world applications I've built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-linear-to-b from-white/10 to-transparent border border-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Role and Timeline Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-linear-to-r from-purple-500/30 to-pink-500/30 text-purple-300 text-xs rounded-full border border-purple-500/50 font-semibold">
                  {project.role}
                </span>
                <span className="text-xs text-gray-500">
                  {project.timeline}
                </span>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[10px] rounded border border-purple-500/30 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Features List */}
              <div className="mb-4">
                <p className="text-xs text-purple-300 font-semibold mb-2 uppercase tracking-wider">
                  Key Achievements
                </p>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Summary */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Tech Stack</p>
                <p className="text-xs text-gray-400 mt-1">
                  {project.tags.slice(0, 5).join(" • ")}
                  {project.tags.length > 5 && " • +" + (project.tags.length - 5)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note from Resume */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            💼 Developed 15+ full-stack features and built 10+ REST APIs with JWT authentication
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;