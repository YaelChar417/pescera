import { z } from "zod";

export const courseSchema = z.object({
  course_name: z.string().min(5, {
    message: "El nombre del curso debe tener al menos 5 caracteres",
  }),
  credits: z
    .number()
    .int() // Verifica que sea un número entero
    .min(1, { message: "El curso debe tener al menos 1 credito" }),
  description: z
    .string()
    .min(5, { message: "La descripción debe tener al menos 5 caracteres" })
    .max(200, {
      message: "El máximo de la descripcion debe tener maximo 200 caracteres",
    }),
});
