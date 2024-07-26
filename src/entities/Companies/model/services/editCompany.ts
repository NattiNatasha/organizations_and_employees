import { createAsyncThunk } from "@reduxjs/toolkit";

import { CompaniesSchema, Company } from "../types/company";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const editCompany = createAsyncThunk<CompaniesSchema, Company, ThunkConfig<string>>(
    'companies/editCompany',
    async (query, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.put<CompaniesSchema>(`/companies/${query.id}`, query)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)