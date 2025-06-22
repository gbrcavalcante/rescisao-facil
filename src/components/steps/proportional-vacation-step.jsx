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

const VACATION_MONTHS_OPTIONS = [
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
];

export function ProportionalVacationStep({ form }) {
  const proportionalVacation = form.watch("proportionalVacation");

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="proportionalVacation"
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
                    Sim, tenho férias proporcionais
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="não" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Não, não tenho férias proporcionais
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {proportionalVacation === "sim" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <FormField
            control={form.control}
            name="proportionalVacationMonths"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de meses</FormLabel>
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
                    {VACATION_MONTHS_OPTIONS.map((item, index) => (
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
