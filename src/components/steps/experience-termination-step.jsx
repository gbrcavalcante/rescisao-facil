import { motion } from "motion/react";

import { AlertCircle } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { useFormData } from "@/store/formDataStore";
import { calculateDaysBetween } from "@/utils/calculations/calculateDaysBetween";

export function ExperienceTerminationStep({ form }) {
  const { getCurrentData } = useFormData();
  const { admission, removal, fgts, withdrawalModality } = getCurrentData();

  const experienceTermination = form.watch("experienceTermination");

  const daysWorked =
    admission.value && removal.value
      ? calculateDaysBetween(admission.value, removal.value)
      : null;

  const showWarning =
    experienceTermination === "pedido de demissão" &&
    withdrawalModality.value === "rescisão" &&
    daysWorked !== null &&
    daysWorked < 90;

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="experienceTermination"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">
              Como o contrato de experiência foi encerrado?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col"
              >
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="dispensa sem justa causa" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Dispensa sem justa causa
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="pedido de demissão" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Pedido de demissão
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {showWarning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Ao pedir demissão antes de completar 90 dias de contrato de
              experiência, você perde o direito ao saque do FGTS no valor de R${" "}
              {fgts?.value} e também ao seguro-desemprego.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </div>
  );
}
