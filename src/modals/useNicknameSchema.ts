
import { z } from "zod";

export const useNicknameSchema = z
    .object({
        nickname: z.string()
    })


