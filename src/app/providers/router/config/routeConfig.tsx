import { RouteProps } from "react-router-dom"

import { EmployeesPage } from "../../../../pages/EmployeesPage"
import { MainPage } from "../../../../pages/MainPage"

export enum AppRoutes {
    MAIN = '/',
    EMPLOYEES = 'employees',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.EMPLOYEES]: '/employees/company/:id',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath["/"],
        element: <MainPage />
    },
    [AppRoutes.EMPLOYEES]: {
        path: RoutePath.employees,
        element: <EmployeesPage />
    },
}