import axiosUrl from "../utils/axios"



export const getAllGames = async () => {
    try {
        const response = await axiosUrl.get(`/games`)
        return response.data
    } catch {
        throw new Error
    }
}