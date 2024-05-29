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

export const getUserReviewFeedbackDetails = async (userId: number | null, reviewId: number | null) => {
    try {
        const response = await axiosUrl.get(`users/${userId}/reviews/${reviewId}`)
        return response.data
    } catch {
        throw new Error
    }
}

export const getUserWrittenReviews = async (userId: number | null, page: number | null | undefined, review_type: string | null) => {
    try {
        const response = await axiosUrl.get(`users/${userId}/my-reviews`, { params: { page, review_type } })
        return response.data
    } catch {
        throw new Error
    }
}

export const getUserWrittenReviewsDetails = async (userId: number | null, reviewId: number | null) => {
    try {
        const response = await axiosUrl.get(`users/${userId}/my-reviews/${reviewId}`)
        return response.data
    } catch {
        throw new Error
    }
}

