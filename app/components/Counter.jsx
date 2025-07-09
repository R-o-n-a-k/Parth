"use client";
import React, { useEffect, useState } from "react";

const Counter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-purple-400">{count}+</span>
      <span className="text-sm font-medium italic text-[var(--text)] mt-1">
        {label}
      </span>
    </div>
  );
};

export default Counter;
