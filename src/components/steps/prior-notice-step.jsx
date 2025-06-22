import { motion } from "motion/react";

import { AlertCircle } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useTerminationReason } from "@/store/terminationReasonStore";
import { useFormData } from "@/store/formDataStore";

export function PriorNoticeStep({ form }) {
  const { getCurrentData } = useFormData();
  const { salary } = getCurrentData();
  const { terminationReason } = useTerminationReason();

  const priorNotice = form.watch("priorNotice");

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="priorNotice"
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
                    <RadioGroupItem value="sim" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Sim, o aviso prévio está sendo cumprido corretamente.
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="não" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {terminationReason.value === "resignation"
                      ? "Não, não irei cumprir o aviso prévio."
                      : "Não, a empresa não me deu aviso prévio"}
                  </FormLabel>
                </FormItem>

                {terminationReason.value === "resignation" && (
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="dispensado" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Não, fui dispensado de cumprir o aviso prévio.
                    </FormLabel>
                  </FormItem>
                )}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {priorNotice === "não" && terminationReason.value === "resignation" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <Alert variant="destructive">
            <AlertCircle />
            <AlertDescription>
              Será descontado {salary.value} do seu acerto de rescisão por não ter
              cumprido o aviso prévio, conforme art. 487, §2º da CLT.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </div>
  );
}
