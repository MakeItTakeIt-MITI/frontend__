import axiosUrl from "../utils/axios";

// 경기 참여 신청 승인 API
export const updateParticipationStatus = async (gameId: number, userId: number | null) => {
    const response = await axiosUrl.patch(`/games/${gameId}/participations/${userId}/`);
    console.log(response);
    return response.data
}