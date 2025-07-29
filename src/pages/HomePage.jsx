import { motion } from "motion/react";

import { useNavigate } from "react-router";

import { ArrowRight } from "lucide-react";

import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="items-center m-auto text-center space-y-6 max-w-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <header>
        <TypographyH1>
          Calcule sua rescisão trabalhista de forma simples e rápida
        </TypographyH1>
        <TypographyP>
          Descubra exatamente quanto você tem direito a receber na sua rescisão.
          Nossa calculadora considera todos os direitos trabalhistas e gera um
          relatório completo em poucos minutos.
        </TypographyP>
      </header>
      <div>
        <Button
          className="rounded-full"
          onClick={() => navigate("/termination-reason")}
        >
          Calcular minha rescisão
          <ArrowRight />
        </Button>
      </div>
    </motion.section>
  );
}
