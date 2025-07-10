import { z } from "zod";

const noScriptsOrTags = /^(?!.*(<|>|\/|script|http|https|ftp|www\.|javascript:)).*$/i;

const blockedDomains = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "dispostable.com",
  "fakeinbox.com",
  "trashmail.com",
  "guerrillamail.com",
  "yopmail.com",
  "spamgourmet.com",
];

const blockedPatterns = [
  "asdf",
  "123",
  "test",
  "qwerty",
  "fake",
  "demo",
  "abc",
];

const allowedTLDs = [
  ".com",
  ".org",
  ".net",
  ".edu",
  ".gov",
  ".ar",
  ".io",
  ".co",
  ".us",
  ".info",
  ".biz",
];

// Validación avanzada para emails con Zod
const emailValidator = z
  .string()
  .email("Email inválido")
  .regex(noScriptsOrTags, "Email inválido")
  .refine((email) => {
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) return false;

    // 1) Verificar TLD válido
    const hasValidTLD = allowedTLDs.some((tld) => domain.endsWith(tld));
    if (!hasValidTLD) return false;

    // 2) Bloqueo de dominios basura
    if (blockedDomains.includes(domain)) return false;

    // 3) Bloqueo de patrones comunes en la parte local
    const localPart = email.split("@")[0].toLowerCase();
    if (blockedPatterns.some((pat) => localPart.includes(pat))) return false;

    return true;
  }, "El email tiene un formato o dominio no permitido");

export const contactSchema = z.object({
  firstName: z.string()
    .min(1, "El nombre es requerido")
    .max(100)
    .regex(noScriptsOrTags, "Nombre inválido"),

  email: emailValidator,

  phone: z.string()
    .min(6, "Teléfono inválido")
    .max(20)
    .regex(/^[0-9+()\s-]*$/, "Teléfono inválido"),

  consult: z.string()
    .min(4, "La consulta debe tener al menos 4 caracteres")
    .max(1000)
    .regex(noScriptsOrTags, "Texto inválido"),
});

export const registerSchema = z.object({
  first_name: z.string()
    .min(1, "El nombre es requerido")
    .max(100)
    .regex(noScriptsOrTags, "Nombre inválido"),

  last_name: z.string()
    .min(1, "El apellido es requerido")
    .max(25)
    .regex(noScriptsOrTags, "Apellido inválido"),

  address: z.string()
    .max(200)
    .regex(noScriptsOrTags, "Dirección inválida")
    .optional(),

  email: emailValidator,

  password: z.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),

  confirmPassword: z.string()
})
.refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: "Las contraseñas no coinciden"
});
