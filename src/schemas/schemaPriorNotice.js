import { z } from "zod";

export const schemaPriorNotice = z.object({
  priorNotice: z.string().nonempty({
    message: "Selecione uma opção para o aviso prévio.",
  }),
});
