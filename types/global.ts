import { Target, Transition } from "framer-motion";

export type MotionItemProps = {
  children: React.ReactNode;
  keyProp?: string | number;
  initial?: Target;
  animate?: Target;
  exit?: Target;
  transition?: Transition;
};
