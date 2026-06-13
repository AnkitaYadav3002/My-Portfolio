import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 italic">Get In Touch</h2>
        <p className="text-gray-400 mb-12">I am currently available for immediate opportunities.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <FaEnvelope className="text-3xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-gray-400">ankita302002@gmail.com</p> {/* [cite: 3] */}
          </motion.div>

          {/* Phone Card */}
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <FaPhoneAlt className="text-3xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-gray-400">+91 7499584855</p> {/*  */}
          </motion.div>

          {/* Location Card */}
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <FaMapMarkerAlt className="text-3xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-gray-400">Satara, Maharashtra</p> {/*  */}
          </motion.div>
        </div>

        {/* Social Bar */}
        <div className="flex justify-center gap-8 text-3xl text-gray-500">
           <a href="https://linkedin.com/in/ankita-yadav30" className="hover:text-white transition-colors">
             <FaLinkedin />
           </a> {/* [cite: 3] */}
           <a href="https://github.com/AnkitaYadav3002" className="hover:text-white transition-colors">
             <FaGithub />
           </a> {/* [cite: 4] */}
        </div>
      </div>
    </section>
  );
};

export default Contact;