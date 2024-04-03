export interface CodeVerificationField {
    code: string
}

export interface EmailAuth {
    email: string;
}

export interface ResetPassField {
    data: EmailAuth;
}

export interface LoginFormProps {
    setDisplayModal: (arg: boolean) => void;
    setErrorCode: (arg: number) => void;
    setErrorMsg: (arg: string) => void;
}