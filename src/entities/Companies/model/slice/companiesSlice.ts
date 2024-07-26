import { createSlice } from '@reduxjs/toolkit'

import { Company, CompaniesSchema } from '../types/company'
import { fetchCompaniesList } from '../services/fetchCompaniesList'
import { deleteCompany } from '../services/deleteCompany'
import { editCompany } from '../services/editCompany'
import { addCompany } from '../services/addCompany'

const initialState: CompaniesSchema = {
    companies: [] as Array<Company>,
    isLoading: false,
    error: ''
} 

export const companiesSlice = createSlice({
    name: 'companies',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompaniesList.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCompaniesList.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.companies = action.payload
            })
            .addCase(fetchCompaniesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(deleteCompany.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(deleteCompany.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.companies = state.companies?.filter(item => item.id !== action.payload.id)
            })
            .addCase(deleteCompany.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(editCompany.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(editCompany.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.companies = state.companies?.filter(item => item.id !== action.payload.id).concat(action.payload)
            })
            .addCase(editCompany.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(addCompany.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(addCompany.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.companies = state?.companies?.concat(action.payload)
            })
            .addCase(addCompany.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: companiesActions} = companiesSlice;
export const {reducer: companiesReducer} = companiesSlice;