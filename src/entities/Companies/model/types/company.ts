export interface Company {
    id: string | ""; 
    title: string; 
    address: string;
    INN: string | null;
}

export interface CompaniesSchema {
    companies?: Array<Company>;
    isLoading?: boolean;
    error?: string;
}