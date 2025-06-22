import { z } from "zod";

export const schemaAccruedVacation = z.object({
  accruedVacation: z.string().nonempty({
    message: "Selecione uma opção para as férias vencidas.",
  }),
});
