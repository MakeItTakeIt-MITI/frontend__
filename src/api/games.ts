import { GameHostField } from "../interface/gameInterface";
import { JoinGameField } from "../pages/UserJoinMatchPage";
import axiosUrl from "../utils/axios"


export const createGameData = async (data: GameHostField) => {
    const response = await axiosUrl.post('/games/', data)
    return response.data

}

export const getAllGames = async () => {
    // const response = await axiosUrl.get(`/games/?startdate=${date}`)
    const response = await axiosUrl.get(`/games/`)
    return response.data
}

export const getGameDetail = async (gameId: number) => {
    const response = await axiosUrl.get(`/games/${gameId}/`)
    return response.data
}

export const userParticipateGame = async (gameId: number, data: JoinGameField) => {
    const response = await axiosUrl.post(`/games/${gameId}/participations/`, data)
    return response.data
}

export const getParticipatingUsers = async (gameId: number) => {
    const response = await axiosUrl.get(`/games/${gameId}/participations/`)
    return response.data
}

export const getGameCourtDetails = async (address: string) => {
    const response = await axiosUrl.get(`/courts/?address=${address}`)
    return response.data

}

export const getMyGameHistory = async (userId: number) => {
    const response = await axiosUrl(`/users/${userId}/participations/`)
    return response.data
}
export const getMyHostHistory = async (userId: number) => {
    const response = await axiosUrl(`/users/${userId}/hostings/`)
    return response.data
}