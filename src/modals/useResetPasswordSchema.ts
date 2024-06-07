
import { z } from "zod";

export const useResetPasswordSchema = z
    .object({
        password: z.string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/),
        new_password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/),
        new_password_check: z.string(),

    })
    .refine((data) => data.new_password === data.new_password_check, {
        path: ["new_password_check"],
    });

