import { z } from "zod";

export const schemaProportionalVacation = z
  .object({
    proportionalVacation: z.string().nonempty({
      message: "Selecione uma opção para as férias proporcionais.",
    }),
    proportionalVacationMonths: z.string().optional(),
  })
  .superRefine((arg, ctx) => {
    if (
      arg.proportionalVacation === "sim" &&
      !arg.proportionalVacationMonths
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["proportionalVacationMonths"],
        message: "Selecione a quantidade de meses.",
      });
    }
  });
