import axiosUrl from "../utils/axios"

export const faqList = async () => {
    try {
        const response = await axiosUrl.get('/support/faq')
        return response.data.data
    } catch {
        throw new Error
    }
}