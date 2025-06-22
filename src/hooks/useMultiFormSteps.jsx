import { useState } from "react";
import { useTerminationReason } from "@/store/terminationReasonStore";

import {
  resignation_steps,
  dismissal_without_cause_steps,
  dismissal_with_cause_steps,
  trial_period_end_steps,
} from "@/constants/steps";

const terminationConfigMap = {
  resignation: resignation_steps,
  dismissal_without_cause: dismissal_without_cause_steps,
  dismissal_with_cause: dismissal_with_cause_steps,
  trial_period_end: trial_period_end_steps,
};

export function useMultiFormSteps() {
  const { terminationReason } = useTerminationReason();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = terminationConfigMap[terminationReason.value] || [];
  function handlePrevStep() {
    setCurrentStep((prev) => prev - 1);
  }
  function handleNextStep() {
    setCurrentStep((prev) => prev + 1);
  }
  return {
    steps,
    title: steps[currentStep]?.title,
    description: steps[currentStep]?.description,
    schema: steps[currentStep]?.schema,
    field: steps[currentStep]?.field,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep + 1 === steps.length,
    currentStep,
    handlePrevStep,
    handleNextStep,
  };
}
