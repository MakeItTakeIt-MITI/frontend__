import axiosUrl from "../utils/axios"

export const viewQuestions = async () => {
    try {
        const response = await axiosUrl.get('/support/qna')
        return response.data
    } catch {
        throw new Error
    }
}

export const postQuestion = async (data: any) => {
    try {
        const response = await axiosUrl.post('/support/qna', data)
        return response.data
    } catch {
        throw new Error
    }
}

export const viewQuestionDetail = async (valid_qna_id: number) => {
    try {
        const response = await axiosUrl.get(`/support/qna/${valid_qna_id}`)
        return response.data
    } catch {
        throw new Error
    }
}

export const frequentlyAskedQuestions = async () => {
    try {
        const response = await axiosUrl.get('/support/faq')
        return response.data
    } catch {
        throw new Error
    }
}