import { createSlice } from '@reduxjs/toolkit'

import { Position, PositionsSchema } from '../types/position'
import { fetchPositions } from '../services/fetchPositions'

const initialState: PositionsSchema = {
    data: [] as Array<Position>,
    isLoading: false,
    error: ''
} 

export const positionsSlice = createSlice({
    name: 'positions',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPositions.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchPositions.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchPositions.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: positionsActions} = positionsSlice;
export const {reducer: positionsReducer} = positionsSlice;