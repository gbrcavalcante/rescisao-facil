import { z } from "zod";

export const schemaSalary = z.object({
  salary: z.string().nonempty({ message: "O campo salário é obrigatório." }),
});
