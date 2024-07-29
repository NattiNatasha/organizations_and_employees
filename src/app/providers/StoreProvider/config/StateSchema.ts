import { AxiosInstance } from "axios";
import { CompaniesSchema } from "../../../../entities/Companies/model/types/company";
import { EmployeesSchema } from "../../../../entities/Employees";
import { PositionsSchema } from "../../../../entities/Employees/model/types/position";

export interface StateSchema {
    companies: CompaniesSchema,
    employees: EmployeesSchema,
    positions: PositionsSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}