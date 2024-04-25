import axiosUrl from "../utils/axios"

export const gamePaymentDetails = async (gameId: number) => {
    try {
        const response = await axiosUrl.get(`/games/${gameId}/payment-info`)
        return response.data
    } catch {
        throw new Error
    }
} 