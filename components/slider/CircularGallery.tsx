"use client";
import { useEffect, useRef } from "react";
import { CircularGalleryProps } from "@/types";
import { App } from "@/lib";

export default function CircularGallery({
  items,
  bend = 3,
  textColor = "#000000",
  borderRadius = 0,
  font = "bold 20px Figtree",
  scrollSpeed = 2,
  scrollEase = 0.05,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const app = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase,
    });
    return () => app.destroy();
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

  return <div className="w-full h-[500px] md:h-[700px] overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />;
}
