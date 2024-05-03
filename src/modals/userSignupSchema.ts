
import { z } from "zod";

export const userRegisterSchema = z
    .object({
        email: z.string().email({ message: "이메일 형식으로 입력해주세요." }),
        password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/, { message: `올바른 비밀번호 양식이 아니에요.` }),
        password_check: z.string(),
        nickname: z.string().trim().regex(/^[가-힣a-zA-Z]{2,15}$/, { message: '올바른 닉네임이 아닙니다!' }),
        // name: z.string().min(1, { message: "올바른 이름형식이 아닙니다." }).max(28, { message: "올바른 이름형식이 아닙니다." }),
        name: z.string().regex(/^[가-힣]{1,8}|[a-zA-Z]{1,14}\s[a-zA-Z]{1,14}$/, { message: "올바른 이름형식이 아닙니다." }),
        birthday: z.string(),
        phone: z.string().trim().length(11, { message: "올바른 양식의 전화번호가 아니에요." }).regex(/^[0-9]+$/, { message: '핸드폰 번호는 숫자만 입력 가능합니다.' })
    })
    .refine((data) => data.password === data.password_check, {
        message: "비밀번호가 일치하지 않아요.",
        path: ["password_check"],
    });

