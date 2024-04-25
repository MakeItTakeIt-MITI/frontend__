import { GameHostField, ParticipantField } from "../interface/gameInterface";
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

export const userParticipateGame = async (gameId: number, data: ParticipantField) => {
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

export const getGuestGameHistory = async (userId: number | null, gameStatus: string, pageNumber: number) => {
    try {
        const response = await axiosUrl(`/users/${userId}/participated-games?game_status=${gameStatus}&page=${pageNumber}`)
        return response.data
    } catch {
        throw new Error
    }
}
export const getHostGameHistory = async (userId: number | null, page_number: number, game_status?: string | null) => {
    try {
        const response = await axiosUrl(`/users/${userId}/hostings?page=${page_number}&game_status=${game_status}`)
        return response.data
    } catch {
        throw new Error
    }
}