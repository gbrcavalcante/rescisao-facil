import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import formatStringToBRL from "@/utils/formatStringToBRL";

export function SalaryStep(form) {
  return (
    <FormField
      control={form.control}
      name="salary"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder="R$ 0,00"
              value={field.value}
              onChange={(e) =>
                field.onChange(formatStringToBRL(e.target.value))
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
