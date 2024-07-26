import { createAsyncThunk } from "@reduxjs/toolkit";

import { CompaniesSchema } from "../types/company";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const deleteCompany = createAsyncThunk<CompaniesSchema, string, ThunkConfig<string>>(
    'companies/deleteCompany',
    async (id, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.delete<CompaniesSchema>(`/companies/${id}`)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)