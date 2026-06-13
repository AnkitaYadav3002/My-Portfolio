import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-40 h-40 bg-purple-500/30 blur-3xl rounded-full pointer-events-none z-50"
      style={{ left: pos.x - 80, top: pos.y - 80 }}
    />
  );
};

export default CursorGlow;