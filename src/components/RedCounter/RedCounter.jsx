import React, { useEffect, useRef, useState } from "react";
import "./redCounter.css";

function RedCounter({ valor, label, duration = 900 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = parseInt(valor);
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [valor, duration]);

  return (
    <div className="redCounter" ref={ref}>
      <div className="valorCounter">
        <h4>{count}</h4>
      </div>
      <div className="labelCounter">
        <h3>{label}</h3>
      </div>
    </div>
  );
}

export default RedCounter;
