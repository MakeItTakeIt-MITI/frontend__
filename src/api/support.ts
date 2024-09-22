import axiosUrl from "../utils/axios"

export const faqList = async (search: string) => {
    try {
        const response = await axiosUrl.get(`/support/faq?=search=${search}`)
        return response.data.data
    } catch {
        throw new Error
    }
}