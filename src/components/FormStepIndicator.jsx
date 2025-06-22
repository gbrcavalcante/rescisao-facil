import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
} from "@/components/ui/stepper";

export default function FormStepIndicator({ steps, currentStep }) {
  return (
    <Stepper>
      {steps.map((step, index) => (
        <StepperItem key={index}>
          <StepperIndicator
            icon={step.icon}
            isActive={index === currentStep}
            isCompleted={currentStep > index}
          />
          {index + 1 < steps.length && (
            <StepperSeparator isActive={currentStep > index} />
          )}
        </StepperItem>
      ))}
    </Stepper>
  );
}
