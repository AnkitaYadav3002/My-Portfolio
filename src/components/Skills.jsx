import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiMysql, SiExpress
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
  { name: "VS Code", icon: <VscVscode />, color: "text-blue-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#050505]">
       <motion.div 
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className="max-w-6xl mx-auto px-4"
       >
         <h2 className="text-4xl font-bold text-center mb-16 italic text-white/50">Expertise</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
           {skills.map((s, i) => (
             <motion.div 
               variants={itemVariants}
               key={i}
               className="group p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center hover:border-purple-500/50 transition-all"
             >
               <div className={`text-5xl mb-4 transition-transform group-hover:scale-110 ${s.color}`}>
                 {s.icon}
               </div>
               <span className="text-sm font-medium text-gray-400 group-hover:text-white">{s.name}</span>
             </motion.div>
           ))}
         </div>
       </motion.div>
    </section>
  );
};

export default Skills;