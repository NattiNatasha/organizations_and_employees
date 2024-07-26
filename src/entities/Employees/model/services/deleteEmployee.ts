import { createAsyncThunk } from "@reduxjs/toolkit";

import { EmployeesSchema } from "../types/EmployeesSchema";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const deleteEmployee = createAsyncThunk<EmployeesSchema, string, ThunkConfig<string>>(
    'employees/deleteEmployee',
    async (id, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.delete<EmployeesSchema>(`/employees/${id}`)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)