import { GameHostField } from "../interface/gameInterface";
import axiosUrl from "../utils/axios"


export const createGameData = async (data: GameHostField) => {
    const response = await axiosUrl.post('games', data)
    console.log(response.data);
    return response.data

}