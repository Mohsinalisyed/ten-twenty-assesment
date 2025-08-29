import { SVGProps } from "react";

export interface IBanners {
  image: string;
  title: string;
  description: string;
}
export interface ContentProps {
  slide: IBanners;
  index: number;
}
export interface CounterProps {
  currentSlide: number;
  totalSlides: number;
}
export interface BannerProps {
  slide: IBanners;
  index: number;
  previousSlide?: IBanners;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  width?: string;
  height?: string;
  fill?: string;
  onClick?: () => void;
};

export interface NavigationProps {
  currentSlide: IBanners;
  nextSlide: IBanners;
  progress: number;
  isHovered: boolean;
  onNext: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
