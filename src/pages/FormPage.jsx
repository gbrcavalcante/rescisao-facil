import { motion } from "motion/react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMultiFormSteps } from "@/hooks/useMultiFormSteps";
import { useFormData } from "@/store/formDataStore";

import FormStepIndicator from "@/components/FormStepIndicator";
import FormStepCard from "@/components/FormStepCard";
import FormReviewDialog from "@/components/FormReviewDialog";

export default function FormPage() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const { updateField, getCurrentData, clearFormData } = useFormData();

  const {
    steps,
    title,
    description,
    schema,
    field,
    isFirstStep,
    isLastStep,
    currentStep,
    handlePrevStep,
    handleNextStep,
  } = useMultiFormSteps();

  const currentData = getCurrentData();

  const hasValidSteps = steps.length > 0;

  useEffect(() => {
    if (!hasValidSteps) {
      clearFormData();
      navigate("/termination-reason");
    }
  }, [hasValidSteps, clearFormData, navigate]);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      salary: "",
      fgts: "",
      withdrawalModality: "",
      admission: "",
      removal: "",
      priorNotice: "",
      proportionalVacation: "",
      proportionalVacationMonths: "",
      accruedVacation: "",
      receivedUnemploymentBefore: "",
      monthsSinceLastUnemployment: "",
    },
  });

  function onSubmit(data) {
    if (!data) return;

    updateField(data);

    if (!isLastStep) {
      handleNextStep();
    } else {
      setOpenDialog(true);
    }
  }

  if (!hasValidSteps) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="max-w-xl m-auto w-full space-y-6"
    >
      <FormStepIndicator steps={steps} currentStep={currentStep} />

      <FormStepCard
        title={title}
        description={description}
        form={form}
        field={field}
        isFirstStep={isFirstStep}
        handlePrevStep={handlePrevStep}
        onSubmit={onSubmit}
      />

      <FormReviewDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        currentData={currentData}
      />
    </motion.section>
  );
}
