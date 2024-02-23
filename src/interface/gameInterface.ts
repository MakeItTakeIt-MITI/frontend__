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
    min_invitation: number;
    max_invitation: number;
    info: string;
    fee: number;
    account_bank: string;
    account_holder: string;
    account_number: string;
    court: Court;
}




export interface AddressField {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
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
    court: Court;
    address: string
}