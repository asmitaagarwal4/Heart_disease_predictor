import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames"; // Alternative for `cn` utility

const AnimatedStat = ({ value, label, duration = 2000, className }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const numericValue = Number.parseInt(value);
    const increment = numericValue / (duration / 16); // 60 FPS
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCurrentValue(numericValue);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className={classNames("space-y-2", className)}>
      <div className="text-4xl md:text-5xl font-bold">
        {inView
          ? `${currentValue}${value.includes("+") ? "+" : value.includes("%") ? "%" : ""}`
          : "0"}
      </div>
      <div className="text-xl text-emerald-100">{label}</div>
    </div>
  );
};

export default AnimatedStat;