"use client";

import { MotionItem } from "@/components/global";
import { DragIndicatorProps } from "@/types";

export const DragIndicator = ({
  mousePos,
  isHovering,
  size = 75,
  text = "Drag",
  backgroundColor = "black",
  textColor = "white",
}: DragIndicatorProps) => {
  if (!isHovering) return null;

  const containerStyle: React.CSSProperties = {
    left: mousePos.x - size / 2,
    top: mousePos.y - size / 2,
    width: size,
    height: size,
    backgroundColor,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  return (
    <MotionItem
      keyProp="drag-indicator"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="fixed pointer-events-none" style={containerStyle}>
        <span
          className="text-base font-fontWorkSans select-none"
          style={{ color: textColor }}
        >
          {text}
        </span>
      </div>
    </MotionItem>
  );
};
