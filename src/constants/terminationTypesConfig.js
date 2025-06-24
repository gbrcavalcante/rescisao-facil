import {
  Briefcase,
  Gavel,
  Hourglass,
  ShieldOff,
  UserX,
  Scale,
  AlertCircle,
  XCircle,
} from "lucide-react";

const TERMINATION_TYPES = [
  {
    title: "Pedido de demissão",
    description:
      "Você decidiu encerrar voluntariamente seu vínculo com a empresa.",
    icon: UserX,
    value: "resignation",
    legalReference: "CLT, art. 487",
  },
  {
    title: "Dispensa sem justa causa",
    description: "A empresa optou por encerrar o contrato sem motivo grave.",
    icon: Briefcase,
    value: "dismissal_without_cause",
    legalReference: "CLT, art. 477",
  },
  {
    title: "Dispensa com justa causa",
    description:
      "A rescisão ocorreu por uma falta grave cometida pelo colaborador.",
    icon: ShieldOff,
    value: "dismissal_with_cause",
    legalReference: "CLT, art. 482",
  },
  {
    title: "Rescisão indireta",
    description:
      "O colaborador encerrou o contrato por faltas graves cometidas pelo empregador.",
    icon: Gavel,
    value: "indirect_termination",
    legalReference: "CLT, art. 483",
  },
  {
    title: "Término de contrato por tempo determinado",
    description:
      "O contrato chegou ao fim do prazo estipulado previamente entre as partes.",
    icon: Hourglass,
    value: "fixed_term_end",
    legalReference: "CLT, art. 479",
  },
  {
    title: "Acordo entre as partes",
    description:
      "A rescisão ocorreu em comum acordo, com condições previstas em lei.",
    icon: Scale,
    value: "mutual_agreement",
    legalReference: "CLT, art. 484-A",
  },
  {
    title: "Término do contrato de experiência (demitido)",
    description:
      "O contrato de experiência foi encerrado pela empresa, sem justa causa.",
    icon: AlertCircle,
    value: "trial_period_end_dismissed",
    legalReference: "CLT, art. 445, §2º",
  },
  {
    title: "Término do contrato de experiência (solicitei demissão)",
    description:
      "Você solicitou o encerramento do contrato de experiência antes do prazo.",
    icon: XCircle,
    value: "trial_period_end_resignation",
    legalReference: "CLT, art. 445, §2º",
  },
];

export default TERMINATION_TYPES;
