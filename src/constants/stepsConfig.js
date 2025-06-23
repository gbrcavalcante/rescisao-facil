// Components
import { AccruedVacationStep } from "@/components/steps/accrued-vacation-step";
import { ExperienceTerminationStep } from "@/components/steps/experience-termination-step";
import { FgtsStep } from "@/components/steps/fgts-step";
import { PriorNoticeStep } from "@/components/steps/prior-notice-step";
import { ProportionalVacationStep } from "@/components/steps/proportional-vacation-step";
import { SalaryStep } from "@/components/steps/salary-step";
import { WithdrawalModalityStep } from "@/components/steps/withdrawal-modality-step";
import { WorkPeriodStep } from "@/components/steps/work-period-step";

// Schemas
import { schemaAccruedVacation } from "@/schemas/schemaAccruedVacation";
import { schemaExperienceTermination } from "@/schemas/schemaExperienceTermination";
import { schemaFgts } from "@/schemas/schemaFgts";
import { schemaPriorNotice } from "@/schemas/schemaPriorNotice";
import { schemaProportionalVacation } from "@/schemas/schemaProportionalVacation";
import { schemaSalary } from "@/schemas/schemaSalary";
import { schemaWithdrawalModality } from "@/schemas/schemaWithdrawalModality";
import { schemaWorkPeriod } from "@/schemas/schemaWorkPeriod";

//Icons
import {
  Clock,
  Wallet,
  FileText,
  PiggyBank,
  HandCoins,
  CalendarCheck,
  CalendarDays,
  AlertTriangle,
} from "lucide-react";

const SALARY_STEP = {
  title: "Salário base",
  description:
    "Informe seu salário mensal bruto para calcular os valores da rescisão",
  field: SalaryStep,
  schema: schemaSalary,
  icon: Wallet,
};

const FGTS_STEP = {
  title: "Saldo do FGTS",
  description: "Digite o valor atual disponível na sua conta do FGTS",
  field: FgtsStep,
  schema: schemaFgts,
  icon: PiggyBank,
};

const WITHDRAWAL_MODALITY_STEP = {
  title: "Modalidade de Saque",
  description:
    "Defina se você optou pelo saque-aniversário ou mantém o saque-rescisão tradicional",
  field: WithdrawalModalityStep,
  schema: schemaWithdrawalModality,
  icon: HandCoins,
};

const WORK_PERIOD_STEP = {
  title: "Período trabalhado",
  description:
    "Informe as datas de admissão e desligamento para calcular o tempo de serviço",
  field: WorkPeriodStep,
  schema: schemaWorkPeriod,
  icon: Clock,
};

const PRIOR_NOTICE_STEP = {
  title: "Aviso Prévio",
  description:
    "Indique se você cumpriu, foi dispensado ou não cumpriu o aviso prévio",
  field: PriorNoticeStep,
  schema: schemaPriorNotice,
  icon: FileText,
};

const PROPORTIONAL_VACATION_STEP = {
  title: "Férias Proporcionais",
  description:
    "Selecione quantos meses você trabalhou no período aquisitivo atual das férias",
  field: ProportionalVacationStep,
  schema: schemaProportionalVacation,
  icon: CalendarDays,
};

const ACCRUED_VACATION_STEP = {
  title: "Férias Vencidas",
  description:
    "Informe se você possui períodos de férias não gozadas (vencidas) a receber",
  field: AccruedVacationStep,
  schema: schemaAccruedVacation,
  icon: CalendarCheck,
};

const EXPERIENCE_TERMINATION_STEP = {
  title: "Término do contrato de experiência",
  description:
    "Informe se foi você quem pediu demissão ou se foi dispensado pela empresa durante o contrato de experiência.",
  field: ExperienceTerminationStep,
  schema: schemaExperienceTermination,
  icon: AlertTriangle,
};

export {
  SALARY_STEP,
  FGTS_STEP,
  WITHDRAWAL_MODALITY_STEP,
  WORK_PERIOD_STEP,
  PRIOR_NOTICE_STEP,
  PROPORTIONAL_VACATION_STEP,
  ACCRUED_VACATION_STEP,
  EXPERIENCE_TERMINATION_STEP,
};
