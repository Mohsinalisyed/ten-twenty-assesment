import { MD_CARD_HEIGHT, MD_CARD_WIDTH } from "@/lib";

export function wrapIndex(idx: number, length: number) {
  return ((idx % length) + length) % length;
}

export const getResponsiveDimensions = (viewportWidth: number) => {
  if (viewportWidth < 768) {
    return {
      cardWidth: 280,
      containerWidth: viewportWidth,
      cardHeight: 400,
      containerHeight: 400,
    };
  }
  return {
    cardWidth: MD_CARD_WIDTH,
    containerWidth: viewportWidth,
    cardHeight: MD_CARD_HEIGHT,
    containerHeight: MD_CARD_HEIGHT + 100,
  };
};

const COVERFLOW_PERSPECTIVE = 1200;
const COVERFLOW_ROTATE = 12;
const COVERFLOW_SCALE = 0.8;

export const getPositions = (cardWidth: number, containerWidth: number) => {
  const isSmallScreen = containerWidth < 768;
  const hiddenPart = isSmallScreen ? cardWidth * 0.7 : cardWidth * 0.25;

  return [
    {
      left: -hiddenPart,
      rotate: -COVERFLOW_ROTATE,
      scale: COVERFLOW_SCALE,
      opacity: 0.8,
      zIndex: 2,
      rotateY: 0,
      transformOrigin: "50% 50% -300px",
    },
    {
      left: (containerWidth - cardWidth) / 2,
      rotate: 0,
      scale: COVERFLOW_SCALE,
      opacity: 1,
      zIndex: 3,
      rotateY: 0,
      transformOrigin: "50% 50% -300px",
    },
    {
      left: containerWidth - cardWidth + hiddenPart,
      rotate: COVERFLOW_ROTATE,
      scale: COVERFLOW_SCALE,
      opacity: 0.8,
      zIndex: 2,
      rotateY: 0,
      transformOrigin: "50% 50% -300px",
    },
  ];
};

export const COVERFLOW_PERSPECTIVE_CONST = COVERFLOW_PERSPECTIVE;
