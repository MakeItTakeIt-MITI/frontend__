
export interface UpdatePartcipationProps {
    gameId: number;
    userId: number | null;
}
export interface PlayerInfo {
    id: number;
    player_name: string;
    player_phone: string;
    player_height: number;
    player_account_holder: string;
    player_account_bank: string;
    player_account_number: string;
    participation_status: string;
}

export interface ParticipantsField {
    id: number;
    data: {
        id: number;
        confirmed: PlayerInfo[];
        cancelled: PlayerInfo[];
        requested: PlayerInfo[];
        refund_requested: PlayerInfo[];
    }
}

export interface ParticipantActionProps {
    refetch: () => void;
    participantsData: ParticipantsField;
    phoneFormatter: (arg: string) => string;
}
export interface RefundActionsProp {
    participantsData: ParticipantsField;
    phoneFormatter: (arg: string) => string;
}

export interface RemoveParticipantProp {
    handleRemoveFromGame: (arg: number) => void;
    userId: number;
}