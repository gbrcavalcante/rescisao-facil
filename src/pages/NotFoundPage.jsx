import { motion } from "motion/react";
import { useNavigate } from "react-router";

import { ArrowLeft } from "lucide-react";

import {
  TypographyH1,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  function handleBackGoHome() {
    navigate("/");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center text-center w-screen h-screen"
    >
      <TypographyMuted>404</TypographyMuted>
      <TypographyH1>Página não encontrada</TypographyH1>
      <TypographyP>
        Desculpe, não foi possível encontrar a página que você está procurando.
      </TypographyP>
      <Button className="mt-6" variant="ghost" onClick={handleBackGoHome}>
        <ArrowLeft /> Voltar para página inicial
      </Button>
    </motion.div>
  );
}
