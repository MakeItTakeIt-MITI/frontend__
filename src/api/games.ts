import { GameHostField } from "../interface/gameInterface";
import { JoinGameField } from "../pages/UserJoinMatchPage";
import axiosUrl from "../utils/axios"


export const hostGame = async (data: GameHostField) => {
    try {
        const response = await axiosUrl.post('/games', data)
        return response.data
    } catch {
        throw new Error
    }

}

export const getAllGames = async (date: string) => {
    try {
        const response = await axiosUrl.get(`/games?startdate=${date}`)
        // const response = await axiosUrl.get(`/games/`)
        return response.data
    } catch (error) {
        console.error()
    }
}

export const getGameDetail = async (gameId: number) => {
    try {
        const response = await axiosUrl.get(`/games/${gameId}`)
        return response.data
    } catch {
        throw new Error
    }
}

export const userParticipateGame = async (gameId: number, data: JoinGameField) => {
    const response = await axiosUrl.post(`/games/${gameId}/participations`, data)
    return response.data
}

export const getParticipatingUsers = async (gameId: number) => {
    try {
        const response = await axiosUrl.get(`/games/${gameId}/participations`)
        return response.data
    } catch {
        throw new Error
    }
}

export const getGameCourtDetails = async (address: string) => {
    try {
        const response = await axiosUrl.get(`/courts?address=${address}`)
        return response.data
    } catch {
        throw new Error
    }

}

export const getMyGameHistory = async (userId: number) => {
    try {
        const response = await axiosUrl(`/users/${userId}/participations`)
        return response.data
    } catch {
        throw new Error
    }
}
export const getHostGameHistory = async (userId: number | null) => {
    try {
        const response = await axiosUrl(`/users/${userId}/hostings`)
        return response.data
    } catch {
        throw new Error
    }
}