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

export function WithdrawalModalityStep({ form }) {
  const { getCurrentData } = useFormData();
  const { fgts } = getCurrentData();

  const withdrawalModality = form.watch("withdrawalModality");

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="withdrawalModality"
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
                    <RadioGroupItem value="rescisão" />
                  </FormControl>
                  <FormLabel className="font-normal">Saque rescisão</FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="aniversário" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Saque aniversário
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {withdrawalModality === "aniversário" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <Alert variant="destructive">
            <AlertCircle />
            <AlertDescription>
              Com o saque-aniversário ativo, o valor de {fgts.value} do seu FGTS não
              estará disponível para saque na rescisão, conforme Lei nº
              13.932/2019.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </div>
  );
}
