export interface FAQItem {
    id: number;
    category: string;
    title: string;
    content: string;
    created_at: string;
    modified_at: string;
}


export interface PrivateInquiryField {
    title: string;
    password: string;
    content: string;
}


export interface InquiryListField {
    id: number;
    title: string;
    num_of_answers: number;
    created_at: string;
}

export interface ServiceAgreementField {
    id: number;
    category: string;
    title: string;
    content: string;
    image: string[];
    created_at: string;
    modified_at: string;
}