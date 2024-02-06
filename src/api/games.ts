import { GameHostField } from "../interface/gameInterface";
import axiosUrl from "../utils/axios"


export const createGameData = async (data: GameHostField) => {
    const response = await axiosUrl.post('/games/', data)
    return response.data

}

export const getAllGames = async () => {
    const response = await axiosUrl.get("/games/")
    return response.data
}