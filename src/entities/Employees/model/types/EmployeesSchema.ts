export interface Employee {
    id: string; 
    companyId?: string;
    firstName: string; 
    lastName: string;
    position: number;
}

export interface EmployeesSchema {
    data?: Array<Employee>;
    isLoading?: boolean;
    error?: string;
}