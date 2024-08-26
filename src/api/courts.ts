// /courts?district=서울

import axiosUrl from "../utils/axios"

export const getAllCourts = async (city: string | null) => {
    try {
        const response = await axiosUrl.get(`courts?district=${city}`)
        return response.data
    } catch {
        throw new Error
    }
}