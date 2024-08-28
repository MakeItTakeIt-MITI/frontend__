// /courts?district=서울

import axiosUrl from "../utils/axios"

// export const getAllCourts = async (city: string) => {
//     try {
//         const response = await axiosUrl.get(`courts?district=${city}`)
//         return response.data
//     } catch {
//         throw new Error
//     }
// }

export const getAllCourts = async (search: string | null | undefined, pageParam: number | null, district: string | null | undefined) => {
    try {
        const response = await axiosUrl.get(`/courts`, { params: { search, pageParam, district } })
        return response.data
    } catch {
        throw new Error
    }
}

export const getProceededCourtList = async (courtId: number | null, pageParam: number | null) => {
    try {
        const response = await axiosUrl.get(`/courts/${courtId}/games`, { params: { pageParam } })
        return response.data
    } catch {
        throw new Error
    }
}