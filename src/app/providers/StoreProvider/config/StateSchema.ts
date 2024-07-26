import { AxiosInstance } from "axios";
import { CompaniesSchema } from "../../../../entities/Companies/model/types/company";
import { EmployeesSchema } from "../../../../entities/Employees";

export interface StateSchema {
    companies: CompaniesSchema,
    employees: EmployeesSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}