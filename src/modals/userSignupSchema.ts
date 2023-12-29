
import { z } from "zod";

export const userRegisterSchema = z
    .object({
        email: z.string().email({ message: "이메일 포멧 확인해주세요." }),
        // 비밀번호는 8자 이상의 영문 대소문자와 숫자, 특수문자를 포함하여야 합니다
        password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/, { message: `비밀번호는 8자 이상의 영문 대소문자와 숫자, 특수문자를 포함하여야 합니다.` }),
        // .min(8, { message: "Password must be at least 8 characters" }),
        password_check: z.string(),
        nickname: z.string().trim().regex(/^[가-힣a-zA-Z]{2,6}$/, { message: '닉네임은 2자 이상, 6자 이상, 영문 또는 한문 포함하여야 합니다.' }),
        // .min(5, { message: "Minimum of 5 or more characters" }),
    })
    .refine((data) => data.password === data.password_check, {
        message: "비밀번호가 일치하지 않습니다.",
        path: ["password_check"],
    });

