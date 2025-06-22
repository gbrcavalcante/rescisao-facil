import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function AccruedVacationStep({ form }) {
  return (
    <FormField
      control={form.control}
      name="accruedVacation"
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
                  Sim, tenho férias vencidas
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <RadioGroupItem value="não" />
                </FormControl>
                <FormLabel className="font-normal">
                  Não, não tenho férias vencidas
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
