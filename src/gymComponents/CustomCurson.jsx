import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Spring configurations for smooth cursor movement
  const springConfig = { stiffness: 500, damping: 28 };
  const cursorX = useSpring(cursorPosition.x, springConfig);
  const cursorY = useSpring(cursorPosition.y, springConfig);

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Change cursor variant on hover
  const handleMouseEnter = () => setCursorVariant("hover");
  const handleMouseLeave = () => setCursorVariant("default");

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Cursor variants for default and hover states
  const cursorVariants = {
    default: {
      x: cursorX,
      y: cursorY,
      backgroundColor: "#1a202c",
      height: 20,
      width: 20,
      borderRadius: "50%",
    },
    hover: {
      x: cursorX,
      y: cursorY,
      backgroundColor: "#4a5568",
      height: 40,
      width: 40,
      borderRadius: "50%",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      variants={cursorVariants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
