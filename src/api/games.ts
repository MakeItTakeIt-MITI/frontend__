import { STATUS_TRANSLATION } from "../constants/status";
import axiosUrl from "../utils/axios";

type StatusKey = keyof typeof STATUS_TRANSLATION;


export const getAllGames = async (
    startdate?: string,
    startime?: string,
    status?: StatusKey[]
) => {

    try {
        const queryParams = new URLSearchParams();

        if (startdate) queryParams.append("startdate", startdate);
        if (startime) queryParams.append("starttime", startime);
        status?.forEach(status => {
            const translatedStatus = STATUS_TRANSLATION[status];
            if (translatedStatus) {
                queryParams.append('game_status', translatedStatus);
            }
        });


        const response = await axiosUrl.get(`/games?${queryParams.toString()}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch games data");
    }
};

export const getGameDetail = async (id: number) => {
    try {
        const response = await axiosUrl.get(`/games/${id}`)
        return response.data
    } catch {
        throw new Error
    }
}