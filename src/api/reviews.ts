import axiosUrl from "../utils/axios"

export const getReviewDetails = async (ratingId: number | null | undefined) => {
    try {
        const response = await axiosUrl.get(`/ratings/${ratingId}`)
        return response.data
    } catch {
        throw new Error
    }
}



export const writeGuestReview = async (gameId: number | null, participationId: number | null, data: { rating: number, comment: string }) => {
    try {
        const response = await axiosUrl.post(`/games/${gameId}/participations/${participationId}/guest-reviews`, data)
        return response.data
    } catch {
        throw new Error
    }

}

export const writeHostReview = async (gameId: number | null, data: { rating: number, comment: string }) => {
    try {
        const response = await axiosUrl.post(`/games/${gameId}/reviews`, data)
        return response.data
    } catch {
        throw new Error
    }

}