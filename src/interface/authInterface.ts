export interface CodeVerificationField {
    code: string
}

export interface EmailAuth {
    email: string;
}

export type ResetPassField = {
    phone: string;
}

export interface LoginFormProps {
    setErrorCode: (arg: number) => void;
    errorCode: number;
}