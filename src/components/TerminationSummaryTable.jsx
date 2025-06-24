import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

import formatNumberToBRL from "@/utils/formatNumberToBRL";

export default function TerminationSummaryTable({
  data,
  totalEarnings,
  totalINSS,
  totalIRRF,
}) {
  return (
    <section className="overflow-auto w-full">
      <Table>
        <TableCaption>
          Resumo detalhado dos valores e descontos calculados na rescisão.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Desconto INSS</TableHead>
            <TableHead>Desconto IRRF</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(([key, item]) => (
            <TableRow key={key}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{formatNumberToBRL(item.value)}</TableCell>
              <TableCell>
                {item.inss ? formatNumberToBRL(item.inss) : null}
              </TableCell>
              <TableCell>
                {item.irrf ? formatNumberToBRL(item.irrf) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{formatNumberToBRL(totalEarnings)}</TableCell>
            <TableCell>{formatNumberToBRL(totalINSS)}</TableCell>
            <TableCell>{formatNumberToBRL(totalIRRF)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
}
