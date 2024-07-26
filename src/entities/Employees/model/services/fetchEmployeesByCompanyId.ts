import { createAsyncThunk } from "@reduxjs/toolkit";

import { EmployeesSchema } from "../types/EmployeesSchema";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const fetchEmployeesByCompanyId = createAsyncThunk<EmployeesSchema, string, ThunkConfig<string>>(
    'employees/fetchEmployeesByCompanyId',
    async (companyId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.get<EmployeesSchema>(`/employees`, {
                params: {
                    'meta.companyId': companyId
                }
            })
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)