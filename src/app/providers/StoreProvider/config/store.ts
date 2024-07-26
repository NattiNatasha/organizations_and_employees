import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { companiesReducer } from "../../../../entities/Companies/model/slice/companiesSlice";
import { $api } from "../../../../shared/api/api";
import { employeesReducer } from "../../../../entities/Employees";

export const rootReducer = combineReducers({
        companies: companiesReducer,
        employees: employeesReducer
    })

export const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api
                    }
                }
            })
})

export type AppDispatch = typeof store.dispatch