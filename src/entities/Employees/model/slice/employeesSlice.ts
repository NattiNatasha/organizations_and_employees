import { createSlice } from '@reduxjs/toolkit'

import { Employee, EmployeesSchema } from '../types/EmployeesSchema'
import { fetchEmployeesByCompanyId } from '../services/fetchEmployeesByCompanyId'
import { deleteEmployee } from '../services/deleteEmployee'

const initialState: EmployeesSchema = {
    data: [] as Array<Employee>,
    isLoading: false,
    error: ''
} 

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeesByCompanyId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchEmployeesByCompanyId.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchEmployeesByCompanyId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(deleteEmployee.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(deleteEmployee.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.data = state.data?.filter(item => item.id !== action.payload.id)
            })
            .addCase(deleteEmployee.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: employeesActions} = employeesSlice;
export const {reducer: employeesReducer} = employeesSlice;