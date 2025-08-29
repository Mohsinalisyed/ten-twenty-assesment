import { ButtonProps } from "@/types";

export const Button = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = "",
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};
