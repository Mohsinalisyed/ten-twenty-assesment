import Image from "next/image";
import { Button } from "../ui";
import { NavigationProps } from "@/types";
import { HoverOverlay, ProgressCircle } from "./components";

export const Navigation = ({
  progress,
  isHovered,
  onNext,
  onMouseEnter,
  onMouseLeave,
  nextSlide,
}: NavigationProps) => (
  <div className="absolute left-6 md:left-[135px] bottom-[5%] flex flex-col gap-4  -translate-y-1/2">
    <div className="relative p-4 h-[115px] w-[115px] md:h-[138px] md:w-[138px] flex items-center justify-center">
      <ProgressCircle progress={progress} />
      <Button
        onClick={onNext}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="w-[77px] h-[77px] md:w-[93px] md:h-[93px] relative overflow-hidden group"
      >
        <Image
          src={nextSlide.image}
          alt={nextSlide.title}
          width={100}
          height={100}
          className="object-cover w-full h-full"
          unoptimized
          priority
        />
        <HoverOverlay isHovered={isHovered} />
      </Button>
    </div>
  </div>
);
