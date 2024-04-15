export interface Court {
    name: string;
    address: string;
    address_detail: string;
}


export interface GameHostField {
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    info: string;
    fee: number;
    min_invitation: number;
    max_invitation: number;
    court: Court;
}




export interface AddressField {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
}
export interface GameCourtData {
    address: string;
    address_detail: string;
    id: number;
    latitude: string;
    longitude: string;
}
export interface GameDetailField {
    id: number;
    game_status: string;
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    fee: number;
    num_of_participations: number;
    court: GameCourtData;
    // address: string
}

export interface Game {
    game: {
        id: number;
        game_status: string;
        title: string;
        startdate: string;
        starttime: string;
        enddate: string;
        endtime: string;
        fee: number;
        court: Court;
    }
}

export interface GuestGameField {
    id: number;
    data: Game[]
}

export interface GameDetailProp {
    gameDetail: {
        data: {
            title: string;
            startdate: string;
            starttime: string;
            enddate: string;
            endtime: string;
            account_bank: string;
            account_holder: string;
            account_number: string;
            fee: number;
            court: {
                address: string;
                address_detail: string;
            };
        };
    };
    handleCloseModal?: () => void;
}

export interface ParticipantsField {
    participantsData: {
        data: {
            id: number;
            planyer_name: string;
            player_phone: string;
        }
    }
}

export interface ParticipantActionsProps {
    refetch?: () => void;
    participantsData: ParticipantsField;
    phoneFormatter: () => void;
}


export interface ModalInviteProp {
    hostName: string;
    titleContextOne: string;
    titleContextTwo: string;
    mainContext: string;
    buttonContextOne: string;
    buttonContextTwo: string;
}

export interface ParticipantField {
    id: number;
    player_name: string;
    player_phone: number;
    player_height: number;
    player_account_holder: string;
    player_account_bank: string;
    player_account_number: number;
    participation_status: string;
}

export interface BoxProp {
    titleOne: string;
    titleTwo: string;
    titleOneColor: string;
    titleTwoColor: string;
}

export interface RequestButtonProp {
    textOne: string;
    textTwo: string;
    backgroundColor: string;
    handleRemoveFromGame?: (userId: number) => void;
    handleConfirmToGame?: (userId: number) => void;
    handleCopyClipBoard?: (arg: string) => void;
    userId: number;
}

export interface GameIfno {
    id: number;
    player_name: string;
    player_phone: string;
    player_height: number;
    player_account_holder: string;
    player_account_bank: string;
    player_account_number: string;
    participation_status: string;
}

export interface GameDetailField {

    game_status: string;
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: number;
    info: string;
    fee: number;
    account_bank: string;
    account_holder: string;
    account_number: string;
    created_at: string;
    modified_at: string;
    confimed_participations: number;
}

export interface HostField {
    email: string;
    nickname: string;
    phone: string;
}

export interface CourtField {
    id: number;
    address: string;
    address_detail: string;
    name: string;
    info: string;
}

export interface ParticipantsField {
    id: number;
    host: HostField[];
    court: CourtField[];
    data: GameDetailField;

}

export interface GameDetailProp {
    gameData: ParticipantsField;
}

