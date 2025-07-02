import { z } from "zod"

const noScriptsOrTags = /^(?!.*(<|>|\/|script|http|https|ftp|www\.)).*$/i

export const contactSchema = z.object({
  firstName: z.string()
    .min(1, "El nombre es requerido")
    .max(100)
    .regex(noScriptsOrTags, "Nombre inválido"),

  email: z.string()
    .email("Email inválido")
    .regex(noScriptsOrTags, "Email inválido"),

  phone: z.string()
    .min(6, "Teléfono inválido")
    .max(20)
    .regex(/^[0-9+()\s-]*$/, "Teléfono inválido"),

  consult: z.string()
    .min(4, "La consulta debe tener al menos 4 caracteres")
    .max(1000)
    .regex(noScriptsOrTags, "Texto inválido"),
})