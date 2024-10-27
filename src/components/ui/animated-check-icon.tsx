import { motion } from 'framer-motion';

export default function AnimatedCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      />
    </svg>
  );
}
