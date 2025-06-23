import {
  ACCRUED_VACATION_STEP,
  FGTS_STEP,
  PRIOR_NOTICE_STEP,
  PROPORTIONAL_VACATION_STEP,
  SALARY_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  EXPERIENCE_TERMINATION_STEP,
} from "@/constants/stepsConfig";

const resignation_steps = [
  SALARY_STEP,
  PRIOR_NOTICE_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
];

const dismissal_without_cause_steps = [
  SALARY_STEP,
  PRIOR_NOTICE_STEP,
  FGTS_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  ACCRUED_VACATION_STEP,
  PROPORTIONAL_VACATION_STEP,
];

const dismissal_with_cause_steps = [SALARY_STEP, ACCRUED_VACATION_STEP];

const trial_period_end_steps = [
  SALARY_STEP,
  FGTS_STEP,
  WITHDRAWAL_MODALITY_STEP,
  EXPERIENCE_TERMINATION_STEP,
  WORK_PERIOD_STEP,
];

export {
  resignation_steps,
  dismissal_without_cause_steps,
  dismissal_with_cause_steps,
  trial_period_end_steps,
};
