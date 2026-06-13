import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaArrowRight, FaCheckCircle } from "react-icons/fa";

// Custom Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border"
      style={{
        background: "linear-gradient(135deg, rgba(30, 30, 40, 0.95), rgba(20, 20, 30, 0.95))",
        borderColor: type === "success" ? "rgba(139, 92, 246, 0.5)" : "rgba(239, 68, 68, 0.5)",
        boxShadow: type === "success" ? "0 0 20px rgba(139, 92, 246, 0.2)" : "0 0 20px rgba(239, 68, 68, 0.2)"
      }}
    >
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${type === "success" ? "bg-purple-500/20" : "bg-red-500/20"}`}>
        {type === "success" ? (
          <FaCheckCircle className="text-purple-400 text-lg" />
        ) : (
          <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div>
        <p className="text-white text-sm font-medium">{message}</p>
        <p className="text-gray-400 text-xs mt-0.5">
          {type === "success" ? "Copied to clipboard" : "Please try again"}
        </p>
      </div>
      <button
        onClick={onClose}
        className="ml-2 text-gray-400 hover:text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate contact cards with stagger
      gsap.fromTo(cardsRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(0.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -10,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 200 }
    }),
    hover: { 
      y: -5,
      scale: 1.2,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${type} copied to clipboard!`, "success");
    } catch (err) {
      showToast(`Failed to copy ${type}`, "error");
    }
  };

  const handleViewOnMap = () => {
    const address = encodeURIComponent("Satara, Maharashtra, India");
    window.open(`https://www.google.com/maps/search/${address}`, "_blank");
    showToast("Opening Google Maps", "success");
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 bg-linear-to-b from-[#050505] to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-500"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% auto" }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.p 
            className="text-gray-400 mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            I'm currently available for <span className="text-purple-400 font-semibold">immediate opportunities</span>
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            ref={(el) => (cardsRef.current[0] = el)}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="group relative p-6 md:p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            onClick={() => handleCopy("ankita302002@gmail.com", "Email")}
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaEnvelope className="text-3xl md:text-4xl text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            </motion.div>
            
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Email</h3>
            <p className="text-gray-400 text-center text-sm md:text-base break-all">ankita302002@gmail.com</p>
            
            <motion.div
              className="flex items-center justify-center gap-1 mt-3 text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <span>Click to copy</span>
              <FaArrowRight size={10} />
            </motion.div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            ref={(el) => (cardsRef.current[1] = el)}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="group relative p-6 md:p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            onClick={() => handleCopy("+91 7499584855", "Phone number")}
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3.5 }}
            >
              <FaPhoneAlt className="text-3xl md:text-4xl text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            </motion.div>
            
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Phone</h3>
            <p className="text-gray-400 text-center text-sm md:text-base">+91 7499584855</p>
            
            <motion.div
              className="flex items-center justify-center gap-1 mt-3 text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <span>Click to copy</span>
              <FaArrowRight size={10} />
            </motion.div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            ref={(el) => (cardsRef.current[2] = el)}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="group relative p-6 md:p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            onClick={handleViewOnMap}
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                y: [0, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            >
              <FaMapMarkerAlt className="text-3xl md:text-4xl text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            </motion.div>
            
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Location</h3>
            <p className="text-gray-400 text-center text-sm md:text-base">Satara, Maharashtra</p>
            
            <motion.div
              className="flex items-center justify-center gap-1 mt-3 text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <span>View on map</span>
              <FaArrowRight size={10} />
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider">Connect with me</p>
          
          <div className="flex justify-center gap-6 md:gap-8">
            <motion.a
              custom={0}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              href="https://linkedin.com/in/ankita-yadav30"
              target="_blank"
              rel="noreferrer"
              className="relative p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <FaLinkedin className="text-2xl md:text-3xl text-gray-400 group-hover:text-[#0077b5] transition-colors" />
              <motion.span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-purple-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                initial={{ y: 5 }}
                whileHover={{ y: 0 }}
              >
                LinkedIn
              </motion.span>
            </motion.a>

            <motion.a
              custom={1}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              href="https://github.com/AnkitaYadav3002"
              target="_blank"
              rel="noreferrer"
              className="relative p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <FaGithub className="text-2xl md:text-3xl text-gray-400 group-hover:text-white transition-colors" />
              <motion.span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-purple-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                initial={{ y: 5 }}
                whileHover={{ y: 0 }}
              >
                GitHub
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Ankita Yadav. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;