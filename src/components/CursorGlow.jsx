import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();
  const previousPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      previousPos.current = { x: pos.x, y: pos.y };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
      updatePosition(e);
    };

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pos.x, pos.y]);

  // Smooth follow animation
  const smoothX = useRef(pos.x);
  const smoothY = useRef(pos.y);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      smoothX.current += (pos.x - smoothX.current) * 0.15;
      smoothY.current += (pos.y - smoothY.current) * 0.15;
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [pos.x, pos.y]);

  return (
    <>
      {/* Main Cursor Glow */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        animate={{
          x: smoothX.current - (isHovering ? 60 : 80),
          y: smoothY.current - (isHovering ? 60 : 80),
          width: isHovering ? 120 : 160,
          height: isHovering ? 120 : 160,
          opacity: isHovering ? 0.6 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.8,
        }}
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0.1) 60%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* Secondary Glow (Inner) */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        animate={{
          x: smoothX.current - 20,
          y: smoothY.current - 20,
          width: isHovering ? 30 : 40,
          height: isHovering ? 30 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.3) 100%)",
          filter: "blur(4px)",
        }}
      />

      {/* Trail Effect - Multiple trailing dots */}
      {[...Array(5)].map((_, i) => {
        const delay = (i + 1) * 0.05;
        return (
          <motion.div
            key={i}
            className="fixed pointer-events-none z-40 rounded-full"
            animate={{
              x: smoothX.current - (i + 1) * 6,
              y: smoothY.current - (i + 1) * 6,
              width: 8 - i,
              height: 8 - i,
              opacity: 0.3 - i * 0.05,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay,
            }}
            style={{
              background: `rgba(139, 92, 246, ${0.4 - i * 0.07})`,
              filter: "blur(2px)",
            }}
          />
        );
      })}

      {/* Click Ripple Effect */}
      <ClickRipple />
    </>
  );
};

// Click Ripple Effect Component
const ClickRipple = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      setRipples(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-50 rounded-full border-2 border-purple-500"
          initial={{
            x: ripple.x - 10,
            y: ripple.y - 10,
            width: 20,
            height: 20,
            opacity: 0.8,
          }}
          animate={{
            x: ripple.x - 100,
            y: ripple.y - 100,
            width: 200,
            height: 200,
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </>
  );
};

export default CursorGlow;