import axiosUrl from "../utils/axios";

// 경기 참여 신청 승인 API
export const updateParticipationStatus = async (gameId: number, userId: number | null) => {
    const response = await axiosUrl.patch(`/games/${gameId}/participations/${userId}/`);
    console.log(response);
    return response.data
}

// 경기 참여 신청 취소 API
export const cancelParticipationStatus = async (gameId: number, userId: number | null) => {
    const response = await axiosUrl.delete(`/games/${gameId}/participations/${userId}/`);
    console.log(response);
    return response.data
}