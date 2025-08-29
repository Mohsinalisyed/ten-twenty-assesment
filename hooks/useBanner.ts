"use client";

import { useState, useEffect, useRef } from "react";

interface UseSliderOptions<T> {
  slides: T[];
  duration: number;
}

export function useBanner<T>({ slides, duration }: UseSliderOptions<T>) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<T | undefined>(undefined);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    let animationFrame: number;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100 && !isHovered) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else if (newProgress >= 100) {
        next();
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, isHovered]);

  const next = () => {
    setPreviousSlide(slides[currentSlide]);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const prev = () => {
    setPreviousSlide(slides[currentSlide]);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  return {
    currentSlide,
    previousSlide,
    progress,
    isHovered,
    setIsHovered,
    next,
    prev,
    slides,
  };
}
