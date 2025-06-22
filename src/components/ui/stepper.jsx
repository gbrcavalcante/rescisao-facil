import { Check } from "lucide-react";
import { motion } from "motion/react";

function Stepper({ children }) {
  return (
    <div className="flex items-center justify-between mx-1">{children}</div>
  );
}

function StepperItem({ children }) {
  return <div className="flex items-center not-last:flex-1">{children}</div>;
}

function StepperIndicator({ icon, isActive = false, isCompleted = false }) {
  const Icon = icon;

  return (
    <span
      className={`h-8 w-8 border flex justify-center items-center rounded-full transition-all ${
        isActive && "border-primary"
      } ${isCompleted && "bg-primary"}`}
    >
      {isCompleted ? (
        <motion.span
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <Check size={16} className="text-primary-foreground" />
        </motion.span>
      ) : (
        <Icon size={16} />
      )}
    </span>
  );
}

function StepperSeparator({ isActive }) {
  return (
    <span
      className={`h-[1px] flex-1 mx-1.5 transition-color ${
        isActive ? "bg-primary" : "bg-secondary"
      }`}
    />
  );
}

export { Stepper, StepperItem, StepperIndicator, StepperSeparator };
