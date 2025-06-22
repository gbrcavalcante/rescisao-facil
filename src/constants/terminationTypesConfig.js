import { Briefcase, Handshake, Gavel, Hourglass } from "lucide-react";

const TERMINATION_TYPES = [
  {
    title: "Pedido de demissão",
    description:
      "Você decidiu encerrar voluntariamente seu vínculo com a empresa.",
    icon: Handshake,
    value: "resignation",
  },
  {
    title: "Dispensa sem justa causa",
    description: "A empresa optou por encerrar o contrato sem motivo grave.",
    icon: Briefcase,
    value: "dismissal_without_cause",
  },
  {
    title: "Dispensa com justa causa",
    description:
      "A rescisão ocorreu por uma falta grave cometida pelo colaborador.",
    icon: Gavel,
    value: "dismissal_with_cause",
  },
  {
    title: "Término do contrato de experiência",
    description: "O contrato encerrou no fim do período de experiência.",
    icon: Hourglass,
    value: "trial_period_end",
  },
];

export default TERMINATION_TYPES;
