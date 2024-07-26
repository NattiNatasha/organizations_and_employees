export interface Employee {
    id: string; 
    firstname: string; 
    lastname: string;
    position: number;
}

export interface EmployeesSchema {
    data?: Array<Employee>;
    isLoading?: boolean;
    error?: string;
}