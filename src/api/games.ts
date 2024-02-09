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

export const getGameDetail = async (gameId: number) => {
    const response = await axiosUrl.get(`/games/${gameId}/`)
    return response.data
}

export const userParticipateGame = async (gameId: number) => {
    const response = await axiosUrl.post(`/games/${gameId}/participations/`)
    return response.data
}

export const getGameCourtDetails = async (address: string) => {
    const response = await axiosUrl.get(`/courts/?address=${address}`)
    return response.data

}