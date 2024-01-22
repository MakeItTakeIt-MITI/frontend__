
import { z } from "zod";

export const useGameOperateSchema = z
    .object({
        title: z.string(),
        address: z.string(),
        address_detail: z.string(),
        start_date: z.string(),
        start_time: z.number(),
        end_date: z.string(),
        end_time: z.number(),
        min_players: z.number().min(1, { message: "최소 인원 수를 확인해주세요." }),
        max_players: z.number(),
        fee: z.number(),
        announcement: z.string()
    })



