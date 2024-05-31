import axiosUrl from "../utils/axios"

export const getPaymentHistory = async (user_id: number | null, status: string | null) => {
    try {
        const response = await axiosUrl.get(`/users/${user_id}/accounts/game-hosting-settlements`, { params: { status } })
        return response.data
    } catch {
        throw new Error
    }
}



export const getPaymentDetails = async (user_id: number | null, settlement_id: number | null) => {
    try {
        const response = await axiosUrl.get(`/users/${user_id}/accounts/game-hosting-settlements/${settlement_id}`)
        return response.data
    } catch {
        throw new Error
    }
}


export const getBankTransferHistory = async (user_id: number | null, status: string | null) => {
    try {
        const response = await axiosUrl.get(`/users/${user_id}/accounts/bank-transfers`, { params: { status } })
        return response.data
    } catch {
        throw new Error
    }
}


export const getAccountBalance = async (account_id: number | null) => {
    try {
        const response = await axiosUrl.get(`/accounts/${account_id}`)
        return response.data
    } catch {
        throw new Error
    }
}


