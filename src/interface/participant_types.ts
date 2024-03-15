
export interface UpdatePartcipationProps {
    gameId: number;
    userId: number | null;
}

export interface PlayerDetail {
    email: string;
    nickname: string;
}
export interface PlayerInfo {
    id: number;
    player: PlayerDetail;
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
}
export interface RemoveActionProps {
    participantsData: ParticipantsField;
}


export interface RemoveParticipantProp {
    handleRemoveFromGame: (arg: number) => void;
    userId: number;
}