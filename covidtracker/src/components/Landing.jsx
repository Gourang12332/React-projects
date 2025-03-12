import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Reduced delay for faster letter appearance
      duration: 0.3,  // Shortened duration for faster animation
    },
  }),
};

export const Landing = () => {
  const letters = ["C", "A", "C", "S"];
  const [isVisible, setIsVisible] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev); // Toggle visibility between true and false

      // Increment the cycle count each time we toggle visibility
      setCycleCount((prev) => prev + 1);
      
      if (cycleCount >= 3) { // Two cycles completed (appear/disappear twice)
        clearInterval(interval);
        
        // Redirect to YouTube after two cycles
        window.location.href = "https://www.youtube.com/";
      }
    }, 1200); // Total cycle time (1.2 seconds for one appear/disappear cycle)

    return () => clearInterval(interval);
  }, [cycleCount]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "1000vh",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "relative",
          fontSize: "10rem",
          fontWeight: "bold",
          color: "gray",
          display: "flex",
        }}
      >
        {letters.map((letter, i) => (
          <motion.div
            custom={i}
            key={i}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Toggle between visible and hidden
            variants={letterAnimation}
            style={{ position: "relative", margin: "0 20px" }}
          >
            {letter}

            {/* Top white line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.4, // Faster transition for the line animation
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              style={{
                position: "absolute",
                top: "-10px",
                left: 0,
                right: 0,
                height: "2px",
                backgroundColor: "white",
                transformOrigin: "left center",
              }}
            />
            {/* Bottom white line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              style={{
                position: "absolute",
                bottom: "-10px",
                left: 0,
                right: 0,
                height: "2px",
                backgroundColor: "white",
                transformOrigin: "right center",
              }}
            />
            {/* Left vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "-10px",
                width: "2px",
                backgroundColor: "white",
                transformOrigin: "top center",
              }}
            />
            {/* Right vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: "-10px",
                width: "2px",
                backgroundColor: "white",
                transformOrigin: "bottom center",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
