export interface FAQItem {
    id: number;
    category: string;
    title: string;
    content: string;
    created_at: string;  // ISO 8601 string representing the date
    modified_at: string; // ISO 8601 string representing the date
}