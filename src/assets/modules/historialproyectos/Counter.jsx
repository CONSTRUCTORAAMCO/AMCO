import { useEffect, useRef, useState } from "react";
import styles from "./Historial.module.css";

const Counter = ({
  end,
  duration = 1200,
  resetTime = 60000, // 1 minuto
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Detecta cuando entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Animación
  useEffect(() => {
    if (!started) return;

    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(
        Math.floor((progress / duration) * end),
        end
      );
      setCount(value);
      if (progress < duration) requestAnimationFrame(animate);
    };

    const start = () => {
      setCount(0);
      startTime = null;
      requestAnimationFrame(animate);
    };

    start();
    const interval = setInterval(start, resetTime);

    return () => clearInterval(interval);
  }, [started, end, duration, resetTime]);

  return (
    <span ref={ref} className={styles.number}>
      +{count.toLocaleString()}
    </span>
  );
};

export default Counter;
