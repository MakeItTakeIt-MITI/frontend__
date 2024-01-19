import { ValidationField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios";
export const userValidation = async (data: ValidationField) => {
    try {
        const response = await axiosUrl.post("/users/signup-check/", data);
        if (response.data.status_code === 200) {
            console.log(response.data);
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};
