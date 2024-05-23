import axiosUrl from "../utils/axios"

export const getReviewDetails = async (ratingId: number | null) => {
    try {
        const response = await axiosUrl.get(`/ratings/${ratingId}`)
        return response.data
    } catch {
        throw new Error
    }
}



export const writeGuestReview = async (gameId: number | null, participationId: number | null, data: any) => {
    try {
        const response = await axiosUrl.post(`/games/${gameId}/participations/${participationId}/guest-reviews`, data)
        return response.data
    } catch {
        throw new Error
    }

}

export const writeHostReview = async (gameId: number | null, participationId: number | null, data: any) => {
    try {
        const response = await axiosUrl.post(`/games/${gameId}/participations/${participationId}/guest-reviews`, data)
        return response.data
    } catch {
        throw new Error
    }

}