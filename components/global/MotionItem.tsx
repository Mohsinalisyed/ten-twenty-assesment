'use client'
import { motion } from "framer-motion";
import { MotionItemProps } from "@/types";

export const MotionItem = ({
  children,
  keyProp,
  initial,
  animate,
  exit,
  transition,
}: MotionItemProps) => {
  return (
    <motion.div
      key={keyProp}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
