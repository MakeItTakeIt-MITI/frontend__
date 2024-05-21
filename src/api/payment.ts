import axiosUrl from "../utils/axios"

export const getUserPaymentHistory = async (userId: number | null) => {
    try {
        const response = await axiosUrl.get(`/users/${userId}/accounts/game-hosting-settlements`)
        return response.data
    } catch {
        throw new Error
    }
}

export const gamePaymentDetails = async (gameId: number) => {
    try {
        const response = await axiosUrl.get(`/games/${gameId}/payment-info`)
        return response.data
    } catch {
        throw new Error
    }
}

export const getRefundFeeDetails = async (gameId: number | null, userId: number | null) => {
    try {
        const response = await axiosUrl.get(`/games/${gameId}/participations/${userId}/refund-info`)
        return response.data
    } catch {
        throw new Error
    }
}

export const kakaoPayStatusReady = async (gameId: number | null) => {
    try {
        const response = await axiosUrl.post(`payments/kakao/ready/games/${gameId}`)
        return response.data
    } catch {
        throw new Error
    }
}


export const kakaoPayStatusApproved = async (request_id: string | null, pg_token: string | null) => {
    try {
        const response = await axiosUrl.post(`/payments/kakao/approve/${request_id}?pg_token=${pg_token}`
        )
        return response.data
    } catch {
        throw new Error
    }
}


