import { z } from "zod";

export const schemaLastUnemploymentBenefit = z
  .object({
    receivedUnemploymentBefore: z.string().nonempty({
      message: "Selecione uma opção para as férias proporcionais.",
    }),
    monthsSinceLastUnemployment: z.string().optional(),
  })
  .superRefine((arg, ctx) => {
    if (
      arg.receivedUnemploymentBefore !== "primeira solicitação" &&
      !arg.monthsSinceLastUnemployment
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["monthsSinceLastUnemployment"],
        message: "Selecione a quantidade de meses.",
      });
    }
  });
