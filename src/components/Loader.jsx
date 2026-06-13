import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-20 h-20 mx-auto mb-6 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="text-3xl font-black text-white"
          >
            AY
          </motion.div>
          
          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </motion.div>

        {/* Loading text with dot animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1"
        >
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
            className="text-gray-400 text-lg font-mono"
          >
            L
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            className="text-gray-400 text-lg font-mono"
          >
            o
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
            className="text-gray-400 text-lg font-mono"
          >
            a
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
            className="text-gray-400 text-lg font-mono"
          >
            d
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.8 }}
            className="text-gray-400 text-lg font-mono"
          >
            i
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
            className="text-gray-400 text-lg font-mono"
          >
            n
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1.2 }}
            className="text-gray-400 text-lg font-mono"
          >
            g
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1, delay: 1.4 }}
            className="text-purple-500 text-2xl ml-1"
          >
            .
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1, delay: 1.6 }}
            className="text-purple-500 text-2xl"
          >
            .
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1, delay: 1.8 }}
            className="text-purple-500 text-2xl"
          >
            .
          </motion.span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-0.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mt-8"
          style={{ width: "200px" }}
        />
      </div>
    </div>
  );
};

export default Loader;