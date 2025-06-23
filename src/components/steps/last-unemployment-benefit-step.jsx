import { motion } from "motion/react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const LAST_UNEMPLOYMENT_MONTHS_OPTIONS = [
  { title: "1 mês", value: "1" },
  { title: "2 meses", value: "2" },
  { title: "3 meses", value: "3" },
  { title: "4 meses", value: "4" },
  { title: "5 meses", value: "5" },
  { title: "6 meses", value: "6" },
  { title: "7 meses", value: "7" },
  { title: "8 meses", value: "8" },
  { title: "9 meses", value: "9" },
  { title: "10 meses", value: "10" },
  { title: "11 meses", value: "11" },
  { title: "12 meses ou mais", value: "12" },
];

export function LastUnemploymentBenefitStep({ form }) {
  const receivedBefore = form.watch("receivedUnemploymentBefore");

  const showWarning =
    receivedBefore === "segunda solicitação" ||
    receivedBefore === "terceira ou mais";

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="receivedUnemploymentBefore"
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
                    <RadioGroupItem value="primeira solicitação" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Primeira solicitação
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="segunda solicitação" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Segunda solicitação
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="terceira ou mais" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Terceira ou mais
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
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <FormField
            control={form.control}
            name="monthsSinceLastUnemployment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Quantos meses se passaram desde a última vez?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione a quantidade de meses" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {LAST_UNEMPLOYMENT_MONTHS_OPTIONS.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
      )}
    </div>
  );
}
