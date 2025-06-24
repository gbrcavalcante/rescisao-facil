// components/steps/experience-termination-step.jsx

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export function ExperienceTerminationStep({ form }) {
  return (
    <FormField
      control={form.control}
      name="experienceTermination"
      render={({ field }) => (
        <FormItem className="space-y-4">
          <FormLabel>
            Qual foi o motivo do encerramento do contrato de experiência?
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="space-y-2"
            >
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="dispensa sem justa causa" />
                </FormControl>
                <FormLabel className="font-normal">
                  Fui dispensado pela empresa
                </FormLabel>
              </FormItem>

              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="pedido de demissão" />
                </FormControl>
                <FormLabel className="font-normal">
                  Pedi demissão
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
