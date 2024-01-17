
import { z } from "zod";

export const userRegisterSchema = z
    .object({
        email: z.string().email({ message: "이메일 포멧 확인해주세요." }),
        password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/, { message: `비밀번호는 8자 이상의 영문 대소문자와 숫자, 특수문자를 포함하여야 합니다.` }),
        password_check: z.string(),
        nickname: z.string().trim().regex(/^[가-힣a-zA-Z]{2,6}$/, { message: '닉네임은 2자 이상, 6자 이상, 영문 또는 한문 포함하여야 합니다.' }),
        name: z.string(),
        birthday: z.string(),
        phone: z.string().trim().length(11, { message: "유효한 핸드폰 번호를 입력해주세요." }).regex(/^[0-9]+$/, { message: '핸드폰 번호는 숫자만 입력 가능합니다.' })
    })
    .refine((data) => data.password === data.password_check, {
        message: "비밀번호가 일치하지 않습니다.",
        path: ["password_check"],
    });

