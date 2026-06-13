import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-3xl"
      >
        Loading...
      </motion.h1>
    </div>
  );
};

export default Loader;