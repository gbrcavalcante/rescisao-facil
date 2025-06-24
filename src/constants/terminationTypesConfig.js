import {
  Briefcase,
  Gavel,
  Hourglass,
  ShieldOff,
  UserX,
  Scale,
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
];

export default TERMINATION_TYPES;
