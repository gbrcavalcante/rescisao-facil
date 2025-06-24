import { useState } from "react";
import { useTerminationReason } from "@/store/terminationReasonStore";

import {
  resignation_steps,
  dismissal_without_cause_steps,
  dismissal_with_cause_steps,
  indirect_termination_steps,
  fixed_term_end_steps,
  mutual_agreement_steps,
  trial_period_end_dismissed_steps,
  trial_period_end_resignation_steps,
} from "@/constants/terminationStepsConfig";

const terminationConfigMap = {
  resignation: resignation_steps,
  dismissal_without_cause: dismissal_without_cause_steps,
  dismissal_with_cause: dismissal_with_cause_steps,
  indirect_termination: indirect_termination_steps,
  fixed_term_end: fixed_term_end_steps,
  mutual_agreement: mutual_agreement_steps,
  trial_period_end_dismissed: trial_period_end_dismissed_steps,
  trial_period_end_resignation: trial_period_end_resignation_steps,
};

export function useMultiFormSteps() {
  const { terminationReason } = useTerminationReason();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = terminationConfigMap?.[terminationReason?.value] || [];

  function handlePrevStep() {
    setCurrentStep(prev => (prev > 0 ? prev - 1 : 0));
  }

  function handleNextStep() {
    setCurrentStep(prev => (prev + 1 < steps.length ? prev + 1 : prev));
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
