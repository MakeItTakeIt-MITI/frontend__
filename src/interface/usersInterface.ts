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
    id: number | null
    nickname?: string | null;
    password?: string;
    password_check?: string;

}

export interface TokenField {
    access_token: string | null,
    refresh_token: string | null
}

export interface RequestCodeField {
    email: string;
    password: string;
}

export interface NicknameProps {
    id: number | null;
    data: { data: { nickname: string } };
}

export interface NicknameField {
    id: number | null;
    nickname: string;
}

export interface PasswordChangeProps {
    id: number | null;
    refetch: () => void;
}

export interface PasswordField {
    id: number | null;
    password: string;
    password_check: string;
}