export interface Position {
    id: string | ""; 
    title: string; 
}

export interface PositionsSchema {
    data?: Array<Position>;
    isLoading?: boolean;
    error?: string;
}