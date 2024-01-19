export interface RegisterField {
    email: string;
    password: string;
    password_check: string;
    name: string;
    nickname: string;
    birthday: string;
    phone: string;
    confirmation_code?: number;
}

export interface LoginField {
    email: string;
    password: string;
    date?: string;
    token?: string;
    access_token?: string;
    refresh_token?: string;
    data?: () => void;
}
export interface ValidationField {
    email?: string,
    nickname?: string

}

export interface ValidationProps {
    setValidEmail: (arg: boolean) => void,
    setDisplayEmailMsg: (arg: boolean) => void,
    setValidNickname: (arg: boolean) => void,
    setDisplayNickMsg: (arg: boolean) => void,
}

export interface UserEditField {
    email?: string,
    password: string;
    password_check: string;

}