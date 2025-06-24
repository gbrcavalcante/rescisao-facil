import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useTerminationReason } from "@/store/terminationReasonStore";
import { useFormData } from "@/store/formDataStore";
import parseNumberFromString from "@/utils/parseNumberFromString";
import calculateEarlyTerminationIndemnity from "@/utils/calculations/calculateEarlyTerminationIndemnity";
import formatNumberToBRL from "@/utils/formatNumberToBRL";

export function ContractTerminatedEarlyStep({ form }) {
  const { terminationReason } = useTerminationReason();
  const { getCurrentData } = useFormData();
  const { salary } = getCurrentData();

  const contractTerminatedEarly = form.watch("contractTerminatedEarly");
  const monthsRemaining = form.watch("monthsRemaining");

  const salaryParsed = parseNumberFromString(salary?.value) || 0;
  const monthsRemainingParsed = Number(monthsRemaining) || 0;

  const indemnity = calculateEarlyTerminationIndemnity(
    salaryParsed,
    monthsRemainingParsed
  );

  const showWarning =
    contractTerminatedEarly === "sim" &&
    terminationReason?.value === "fixed_term_end";

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="contractTerminatedEarly"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col"
              >
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="não" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Não, o contrato foi encerrado normalmente.
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="sim" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Sim, o contrato foi encerrado antes do prazo final.
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {contractTerminatedEarly === "sim" && (
        <FormField
          control={form.control}
          name="monthsRemaining"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Quantos meses faltavam para o fim do contrato?
              </FormLabel>
              <FormControl>
                <Input placeholder="Ex: 4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {showWarning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Encerramento antecipado</AlertTitle>
            <AlertDescription>
              Neste caso, a empresa deverá pagar uma indenização equivalente a{" "}
              {formatNumberToBRL(indemnity)}, conforme art. 479 da CLT.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </div>
  );
}
