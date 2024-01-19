
import { z } from "zod";

export const useLoginSchema = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .trim().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/),

    });

