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