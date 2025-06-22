import { z } from "zod";

export const schemaFgts = z.object({
  fgts: z
    .string()
    .nonempty({ message: "O campo saldo do FGTS é obrigatório." }),
});
