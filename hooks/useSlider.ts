"use client";

import { useEffect, useState } from "react";
import { useViewport } from "@/hooks";
import { getResponsiveDimensions, wrapIndex } from "@/utils";
import { sliderData } from "@/content";

export const useSlider = () => {
  const { width: viewportWidth } = useViewport();
  const [page, setPage] = useState(0);
  const [dimensions, setDimensions] = useState(
    getResponsiveDimensions(viewportWidth),
  );
  const [isDragging, setIsDragging] = useState(false);

  // auto scroll
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => setPage((p) => p + 1), 4000);
    return () => clearInterval(timer);
  }, [isDragging]);

  // responsive
  useEffect(() => {
    setDimensions(getResponsiveDimensions(viewportWidth));
  }, [viewportWidth]);

  const activeIndex = wrapIndex(page, sliderData.length);
  const leftIndex = wrapIndex(activeIndex - 1, sliderData.length);
  const rightIndex = wrapIndex(activeIndex + 1, sliderData.length);

  const visibleSlides = [
    sliderData[leftIndex],
    sliderData[activeIndex],
    sliderData[rightIndex],
  ];

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    setIsDragging(false);
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) setPage((p) => p - 1);
      else setPage((p) => p + 1);
    }
  };

  return {
    dimensions,
    page,
    setPage,
    isDragging,
    setIsDragging,
    activeIndex,
    visibleSlides,
    handleDragEnd,
  };
};
