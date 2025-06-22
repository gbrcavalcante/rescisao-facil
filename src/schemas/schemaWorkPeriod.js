import { z } from "zod";

export const schemaWorkPeriod = z
  .object({
    admission: z.date({
      invalid_type_error: "Data de admissão é obrigatória.",
    }),
    removal: z.date({
      invalid_type_error: "Data de desligamento é obrigatória.",
    }),
  })
  .superRefine((arg, ctx) => {
    if (arg.admission > arg.removal) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["admission"],
        message: "Data de admissão não pode ser posterior ao desligamento.",
      });
    }
  });
