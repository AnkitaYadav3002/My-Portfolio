import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 text-white bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-500"
        >
          Professional Journey
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed text-gray-300"
        >
          <p>
            I am a <strong className="text-purple-400">Full Stack Developer</strong> with over a year of professional experience building robust web applications. 
            I specialize in the <strong className="text-purple-400">MERN stack</strong>, with a deep focus on creating secure systems using <strong className="text-purple-400">JWT authentication</strong> and 
            <strong className="text-purple-400"> Role-Based Access Control (RBAC)</strong>.
          </p>
          <p>
            My expertise lies in bridging the gap between elegant frontend interfaces and scalable backend architectures. 
            I have a proven track record of improving UI performance by <strong className="text-purple-400">25%</strong> and engineering complex ERP systems 
            from the ground up.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;