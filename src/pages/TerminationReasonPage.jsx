import { motion } from "motion/react";

import { TypographyH3, TypographyP } from "@/components/ui/typography";
import TerminationTypeCards from "@/components/TerminationTypeCards";

export default function TerminationReasonPage() {
  return (
    <section className="space-y-6 max-w-3xl w-full m-auto">
      <motion.header
        className="space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <TypographyH3>Qual o motivo da sua rescisão?</TypographyH3>
        <TypographyP>
          Selecione a situação que melhor descreve como o seu contrato de
          trabalho foi encerrado. Isso nos ajudará a calcular exatamente os
          valores que você tem direito a receber.
        </TypographyP>
      </motion.header>

      <TerminationTypeCards />
    </section>
  );
}
