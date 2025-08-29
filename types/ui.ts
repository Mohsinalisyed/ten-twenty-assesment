import { ReactNode } from "react";

export interface ButtonProps {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  children: ReactNode;
}
