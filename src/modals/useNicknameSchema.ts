import { z } from "zod";

export const useNicknameSchema = z
    .object({
        nickname: z.string().refine(value => value.length > 0, { message: "닉네임 형식이 올바르지 않습니다." })
    });
