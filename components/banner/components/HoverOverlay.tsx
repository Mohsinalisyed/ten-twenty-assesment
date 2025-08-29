import { motion, AnimatePresence } from "framer-motion";

export const HoverOverlay = ({ isHovered }: { isHovered: boolean }) => (
  <AnimatePresence>
    {isHovered && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
      >
        <span className="text-powderBlueColor font-fontWorkSans font-normal text-base">
          Next
        </span>
      </motion.div>
    )}
  </AnimatePresence>
);
