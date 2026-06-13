import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Skylynx Technologies LLP, Satara",
    period: "Feb 2025 - Present",
    desc: [
      "Developed 15+ full-stack features using React.js, Node.js, and Express.js[cite: 12].",
      "Built 10+ REST APIs with JWT authentication and RBAC authorization[cite: 13].",
      "Designed and managed MySQL database schemas and optimized SQL queries[cite: 15].",
      "Improved UI performance and responsiveness by 25% using Tailwind CSS and Vite[cite: 17]."
    ]
  },
  {
    role: "React.js Developer Intern",
    company: "Skylynx Technologies LLP, Satara",
    period: "Nov 2024 - Jan 2025",
    desc: [
      "Created reusable React.js components for admin dashboards[cite: 20].",
      "Integrated REST APIs using Axios for real-time data rendering[cite: 21].",
      "Improved application structure using React Router and modular architecture[cite: 22]."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center italic text-purple-500">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <span className="text-purple-400 font-mono text-sm uppercase tracking-widest">{exp.period}</span>
              <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
              <p className="text-gray-400 mb-4">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.desc.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;