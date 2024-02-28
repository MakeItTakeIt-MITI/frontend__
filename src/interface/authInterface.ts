export interface SMSAuth {
    code: string
}

export interface EmailAuth {
    email: string;
}

export interface ResetPassField {
    data: EmailAuth;
}