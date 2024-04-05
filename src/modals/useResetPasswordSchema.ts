
import { z } from "zod";

export const useResetPasswordSchema = z
    .object({
        new_password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/, { message: '올바른 비밀번호 양식이 아니에요.' }),
        new_password_check: z.string(),

    })
    .refine((data) => data.new_password === data.new_password_check, {
        message: "비밀번호가 일치하지 않아요.",
        path: ["password_check"],
    });

