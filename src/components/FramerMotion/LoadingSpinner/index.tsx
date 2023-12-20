import { motion } from "framer-motion";

const LoadingSpinner = ({
  color,
  spinnerWidth,
  spinnerHeight,
}: {
  color: string;
  spinnerWidth?: string;
  spinnerHeight?: string;
}) => {
  const spinnerVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };

  const spinnerTransition = { repeat: Infinity, duration: 1, ease: "linear" };

  return (
    <motion.div
      className={`${spinnerWidth || "w-[14px]"} ${
        spinnerHeight || "h-[14px]"
      } border-t-4 border-solid rounded-full  border-[${color}]`}
      variants={spinnerVariants}
      initial="initial"
      animate="animate"
      transition={spinnerTransition}
    />
  );
};

export default LoadingSpinner;
