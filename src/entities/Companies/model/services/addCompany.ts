import { createAsyncThunk } from "@reduxjs/toolkit";

import { CompaniesSchema, Company } from "../types/company";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const addCompany = createAsyncThunk<CompaniesSchema, Company, ThunkConfig<string>>(
    'companies/addCompany',
    async (query, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.post<CompaniesSchema>(`/companies`, query)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)