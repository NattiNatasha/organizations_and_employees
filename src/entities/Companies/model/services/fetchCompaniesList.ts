import { createAsyncThunk } from "@reduxjs/toolkit";

import { CompaniesSchema } from "../types/company";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const fetchCompaniesList = createAsyncThunk<CompaniesSchema, null, ThunkConfig<string>>(
    'companies/fetchCompaniesList',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.get<CompaniesSchema>(`/companies`)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)