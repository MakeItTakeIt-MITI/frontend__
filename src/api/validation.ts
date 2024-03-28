import { ValidationField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios";
export const userValidation = async (data: ValidationField) => {
    try {
        const response = await axiosUrl.post("/auth/signup-check", data);
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error
    }
};

export const updateUserInfo = async (userId: number | null, data: { nickname: string | undefined }) => {
    try {
        const response = await axiosUrl.patch(`/users/${userId}`, data)
        return response
    }
    catch (error) {
        throw new Error

    }
}
