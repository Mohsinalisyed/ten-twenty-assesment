import {Mesh, Plane, Renderer,  Transform } from "ogl";

export interface ISlides {
  id: number;
  image: string;
  alt: string;
  text: string;
  location:string
}
export interface MousePosition {
  x: number;
  y: number;
}

export interface UseMouseTrackerReturn {
  mousePos: MousePosition;
  isHovering: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}
export interface DragIndicatorProps {
  mousePos: { x: number; y: number };
  isHovering: boolean;
  size?: number;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface Position {
  left: number;
  rotate: number;
  scale: number;
  opacity: number;
  zIndex: number;
  rotateY: number;
  transformOrigin: string;
}

export interface SlideProps {
  slide: ISlides;
  pos: Position;
  dimensions: { cardWidth: number; cardHeight: number };
  isActive: boolean;
  page: number;
}
export interface ScreenSize {
  width: number;
  height: number;
}
export interface CircularGalleryProps {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}
export interface Viewport {
  width: number;
  height: number;
}
export interface AppConfig {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}
export type GL = Renderer["gl"];

export interface TitleProps {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  text: string;
  textColor?: string;
  font?: string;
}
export interface MediaProps {
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  text: string;
  viewport: Viewport;
  bend: number;
  textColor: string;
  borderRadius?: number;
  font?: string;
}
