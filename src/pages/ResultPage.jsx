import { motion } from "motion/react";

import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useCalculate } from "@/hooks/useCalculate";
import { useUnemployment } from "@/hooks/useUnemployment";

import { useFormData } from "@/store/formDataStore";
import { useTerminationReason } from "@/store/terminationReasonStore";

import { Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TypographyH2 } from "@/components/ui/typography";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Stat, StatLabel, StatValue } from "@/components/ui/stat";
import { Separator } from "@/components/ui/separator";

import TerminationSummaryTable from "@/components/TerminationSummaryTable";

import formatNumberToBRL from "@/utils/formatNumberToBRL";
import getEntriesWithTruthyValue from "@/utils/getEntriesWithTruthyValue";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

export default function ResultPage() {
  const navigate = useNavigate();
  const { eligible, installmentCount, unemploymentBenefit } = useUnemployment();
  const { terminationReason } = useTerminationReason();
  const { clearFormData } = useFormData();
  const { result, totalEarnings, totalINSS, totalIRRF, totalLiquid } =
    useCalculate();

  const data = getEntriesWithTruthyValue(result);
  const hasValidData = data.length > 0;

  useEffect(() => {
    if (!hasValidData) {
      clearFormData();
      navigate("/termination-reason");
    }
  }, [hasValidData, clearFormData, navigate]);

  function handleResetForm() {
    clearFormData();
    navigate("/termination-reason");
  }

  if (!hasValidData) return;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col gap-6 w-full max-w-xl justify-center m-auto"
    >
      <TypographyH2>Rescisão do contrato de trabalho</TypographyH2>
      <Badge variant="outline">{terminationReason.title}</Badge>

      <TerminationSummaryTable
        data={data}
        totalEarnings={totalEarnings}
        totalINSS={totalINSS}
        totalIRRF={totalIRRF}
        totalLiquid={totalLiquid}
      />

      <Separator />

      <Stat>
        <StatLabel>Valor líquido a receber</StatLabel>
        <StatValue>{formatNumberToBRL(totalLiquid)}</StatValue>
      </Stat>

      {eligible && (
        <Alert>
          <Info />
          <AlertTitle>Seguro-desemprego disponível</AlertTitle>
          <AlertDescription>
            Você tem direito a {installmentCount} parcelas no valor de{" "}
            {formatNumberToBRL(unemploymentBenefit)} cada.
          </AlertDescription>
        </Alert>
      )}

      <Button variant="secondary" onClick={handleResetForm}>
        <RefreshCcw /> Reiniciar formulário
      </Button>
    </motion.div>
  );
}
