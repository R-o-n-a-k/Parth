"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AnimateOnScroll() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      offset: 5,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return null;
}