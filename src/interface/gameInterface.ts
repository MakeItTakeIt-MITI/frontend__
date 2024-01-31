export interface GameHostField {
    address: string;
    address_detail: string;
    title: string;
    court_title: string;
    fee: number;
    min_players: number;
    max_players: number;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    announcement: string;
    account_bank: string;
    account_holder: string;
    account_number: number;
}


export interface AddressField {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
}