
import { z } from "zod";

export const useJoinGameSchema = z
    .object({
        player_account_bank: z.string(),
        player_account_number: z
            .string()
            .trim().regex(/^[0-9]+$/, { message: '계좌번호 형식이 올바르지 않습니다.' }),
        player_account_holder: z.string().trim().regex(/^[가-힣a-zA-Z]+$/, { message: '예금주 형식이 올바르지 않습니다.' })
    });

