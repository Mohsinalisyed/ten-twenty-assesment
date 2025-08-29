import Image from "next/image";
import { BannerProps } from "@/types";
import { ANIMATION_DURATION } from "@/lib";
import { MotionItem } from "../global";

export const Slide = ({ slide, index, previousSlide }: BannerProps) => {
  return (
    <div className="absolute inset-0">
      {previousSlide && (
        <div className="absolute inset-0">
          <Image
            src={previousSlide.image}
            alt={previousSlide.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      <MotionItem
        keyProp={index}
        initial={{ height: "100px", opacity: 0.5 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
      >
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </MotionItem>
    </div>
  );
};
