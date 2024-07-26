import { createAsyncThunk } from "@reduxjs/toolkit";

import { Employee, EmployeesSchema } from "../types/EmployeesSchema";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const editEmployee = createAsyncThunk<EmployeesSchema, Employee, ThunkConfig<string>>(
    'employees/editEmployee',
    async (query, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.put<EmployeesSchema>(`/employees/${query.id}`, query)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)