export interface SMSAuth {
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