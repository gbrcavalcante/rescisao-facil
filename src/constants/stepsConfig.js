// Components
import {
  AccruedVacationStep,
  ContractTerminatedEarlyStep,
  FgtsStep,
  LastUnemploymentBenefitStep,
  PriorNoticeStep,
  ProportionalVacationStep,
  SalaryStep,
  WithdrawalModalityStep,
  WorkPeriodStep,
} from "@/components/steps";

// Schemas
import {
  schemaAccruedVacation,
  schemaContractTerminatedEarly,
  schemaFgts,
  schemaLastUnemploymentBenefit,
  schemaPriorNotice,
  schemaProportionalVacation,
  schemaSalary,
  schemaWithdrawalModality,
  schemaWorkPeriod,
} from "@/schemas";

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
  Archive,
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

const LAST_UNEMPLOYMENT_BENEFIT_STEP = {
  title: "Seguro-desemprego anterior",
  description:
    "Informe se você já recebeu seguro-desemprego antes e há quanto tempo.",
  field: LastUnemploymentBenefitStep,
  schema: schemaLastUnemploymentBenefit,
  icon: Archive,
};

const CONTRACT_TERMINATED_EARLY_STEP = {
  title: "Término Antecipado do Contrato",
  description:
    "Informe se o contrato de prazo determinado foi encerrado antes do prazo final e quantos meses faltavam.",
  field: ContractTerminatedEarlyStep,
  schema: schemaContractTerminatedEarly,
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
  LAST_UNEMPLOYMENT_BENEFIT_STEP,
  CONTRACT_TERMINATED_EARLY_STEP,
};
