
import { z } from "zod";

export const useLoginSchema = z
    .object({
        email: z.string().email({ message: '비밀번호가 올바르지 않습니다.' }),
        password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/, { message: '비밀번호가 올바르지 않습니다.' }),

    });

