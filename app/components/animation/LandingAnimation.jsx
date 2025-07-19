"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function LandingAnimation({ children }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(2), 1000), // Welcome text duration
      setTimeout(() => setStep(3), 1600), // Line done
      setTimeout(() => setStep(4), 2200), // Panels done
      setTimeout(() => setStep(5), 2900), // Slide done, show site
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* Step 1: Welcome Text */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-main-bg text-accent text-2xl md:text-4xl font-bold"
        >
          Initializing Portfolio...
        </motion.div>
      )}

      {step === 2 && (
        <div className="fixed inset-0 bg-main-bg z-50 flex items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
            className="h-[1.5px] bg-accent absolute left-0"
          />
        </div>
      )}

      {/* Step 3: Purple Panels Slide Vertically from Center */}
      {step === 3 && (
        <>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 h-1/2 origin-bottom bg-accent z-40"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 right-0 h-1/2 origin-top bg-accent z-40"
          />
        </>
      )}

      {/* Step 4: Black Panel Slides in Horizontally */}
      {step === 4 && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 bg-background z-50"
        />
      )}

      {/* Step 5: Fade In Website Content on top */}
      {step >= 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative z-50"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
