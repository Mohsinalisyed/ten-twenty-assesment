"use client";

import { MousePosition, UseMouseTrackerReturn } from "@/types";
import { useState, useRef } from "react";

export const useMouseTracker = (): UseMouseTrackerReturn => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return {
    mousePos,
    isHovering,
    containerRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};
