import { z } from "zod";

export const schemaWithdrawalModality = z.object({
  withdrawalModality: z.string().nonempty({
    message: "Selecione uma modalidade de saque.",
  }),
});
