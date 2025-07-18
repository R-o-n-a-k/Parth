"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AnimateOnScroll() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  }, []);
}

export default AnimateOnScroll;
