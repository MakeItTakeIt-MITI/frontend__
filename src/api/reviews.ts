import axiosUrl from "../utils/axios"

export const getGameAllReviews = async (ratingId: number | null) => {
    try {
        const response = await axiosUrl.get(`/ratings/${ratingId}`)
        return response.data
    } catch {
        throw new Error
    }
}
