import { ArrowUpRight } from "lucide-react";

import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

import formatStringToBRL from "@/utils/formatStringToBRL";

export function FgtsStep({ form }) {
  return (
    <div className="space-y-6">
      <Badge variant="secondary" asChild>
        <a
          href="https://www.caixa.gov.br/beneficios-trabalhador/fgts/extrato-fgts/Paginas/default.aspx"
          target="_blank"
        >
          Consultar saldo do FGTS <ArrowUpRight />
        </a>
      </Badge>
      <FormField
        control={form.control}
        name="fgts"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="R$ 0,00"
                value={field.value}
                onChange={(e) => field.onChange(formatStringToBRL(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
