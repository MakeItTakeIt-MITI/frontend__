
import { z } from "zod";

export const useMyPageSchema = z
    .object({
        email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
        password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/, { message: '비밀번호가 올바르지 않습니다.' }),
        password_check: z.string(),

    })
    .refine((data) => data.password === data.password_check, {
        message: "비밀번호가 일치하지 않습니다.",
        path: ["password_check"],
    });

