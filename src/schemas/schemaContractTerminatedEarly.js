import { z } from "zod";

export const schemaContractTerminatedEarly = z
  .object({
    contractTerminatedEarly: z.string().nonempty({
      message: "Selecione se o contrato foi encerrado antes do prazo final.",
    }),
    monthsRemaining: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.contractTerminatedEarly === "sim" && !data.monthsRemaining) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["monthsRemaining"],
        message: "Informe quantos meses faltavam para o fim do contrato.",
      });
    }
  });
