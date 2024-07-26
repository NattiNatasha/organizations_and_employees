import { createAsyncThunk } from "@reduxjs/toolkit";

import { Employee, EmployeesSchema } from "../types/EmployeesSchema";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const addEmployee = createAsyncThunk<EmployeesSchema, Employee, ThunkConfig<string>>(
    'employees/addEmployee',
    async (query, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.post<EmployeesSchema>(`/employees`, query)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)