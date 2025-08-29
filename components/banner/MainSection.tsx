"use client";

import { slidesContent } from "@/content/bannerData";
import { SLIDE_DURATION } from "@/lib";
import { Counter } from "./components";
import { Navigation } from "./Navigation";
import { Content } from "./Content";
import { Slide } from "./Slide";
import { useBanner } from "@/hooks";

export const MainSection = () => {
  const {
    currentSlide,
    previousSlide,
    progress,
    isHovered,
    setIsHovered,
    next,
    slides,
  } = useBanner({
    slides: slidesContent,
    duration: SLIDE_DURATION,
  });

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      <Slide
        slide={slides[currentSlide]}
        index={currentSlide}
        previousSlide={previousSlide}
      />

      <div className="absolute inset-0">
        <div className="max-w-[1440px] mx-auto h-full relative">
          <div className="absolute h-full flex items-center md:pl-[135px]">
            <Content slide={slides[currentSlide]} index={currentSlide} />
          </div>

          <Navigation
            currentSlide={slides[currentSlide]}
            progress={progress}
            isHovered={isHovered}
            onNext={next}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            nextSlide={slides[(currentSlide + 1) % slides.length]}
          />

          <Counter currentSlide={currentSlide} totalSlides={slides.length} />
        </div>
      </div>
    </div>
  );
};
