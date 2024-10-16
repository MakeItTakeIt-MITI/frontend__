
import axiosUrl from "../utils/axios"



export const getAllCourts = async (pageParam: number | null, search: string | null | undefined, district: string | null | undefined) => {
    try {
        const response = await axiosUrl.get(`/courts?page=${pageParam}`, { params: { search, district } })
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

export const getCourtDetail = async (courtId: number) => {
    try {
        const response = await axiosUrl.get(`/courts/${courtId}`)
        return response.data
    } catch {
        throw new Error
    }
}