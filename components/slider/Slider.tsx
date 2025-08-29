"use client";

import { sliderData } from "@/content";
import CircularGallery from "./CircularGallery";
import SectionHeader from "./components/SectionHeader";

export const Slider = () => {

  return (
    <div className="flex flex-col items-center py-12 bg-seashellColor">
      <SectionHeader/>

      <CircularGallery items={sliderData} bend={3} scrollSpeed={2} />

    </div>
  );
};
