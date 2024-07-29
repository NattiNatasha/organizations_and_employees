import { createAsyncThunk } from "@reduxjs/toolkit";

import { PositionsSchema } from "../types/position";
import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";

export const fetchPositions = createAsyncThunk<PositionsSchema, null, ThunkConfig<string>>(
    'positions/fetchPositions',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try{
            const response = await extra.api.get<PositionsSchema>(`/positions`)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('Some error occured')
        }
    }
)