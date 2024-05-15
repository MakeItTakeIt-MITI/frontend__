import { GameEditParameters, GameHostField, ParticipantField } from "../interface/gameInterface";
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

export const getGameCourtDetails = async () => {
    try {
        const response = await axiosUrl.get(`/courts`)
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


export const editGameDetail = async (game_id: number | null, options: GameEditParameters) => {
    try {
        const response = await axiosUrl.patch(`/games/${game_id}`, options)
        return response.data
    } catch {
        throw new Error
    }
}

export const cancelGameParticipation = async (gameId: number | null, userId: number | null) => {
    try {
        const response = await axiosUrl.delete(`games/${gameId}/participations/${userId}`)
        return response.data
    } catch {
        throw new Error
    }
}