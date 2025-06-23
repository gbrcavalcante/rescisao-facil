import { z } from "zod";

export const schemaExperienceTermination = z.object({
  experienceTermination: z.string().nonempty({
    message: "Selecione como o contrato foi encerrado.",
  }),
});
