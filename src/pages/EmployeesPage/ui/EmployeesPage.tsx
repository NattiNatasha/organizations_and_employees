import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { Box, Typography } from "@mui/material"

import { EmployeesList } from "../../../entities/Employees"
import { AddEmployee } from "../../../features/AddEmployess"
import { CustomButton } from "../../../shared/ui/Button"

const EmployeesPage = () => {
    const navigate = useNavigate()
    
    const handleGoBackButtonClick = useCallback(() => {
        navigate('/')
    }, [])

    return (
        <Box
            sx={{
            height: 400,
            width: '100%',
        }}
        >
            <CustomButton 
                handleClick={handleGoBackButtonClick}
            >
                НАЗАД
            </CustomButton>
            <Typography
                variant="h3"
                component="h3"
                sx={{ textAlign: 'center', mt: 3, mb: 3 }}
            >
                Справочник сотрудников
            </Typography>
            <AddEmployee />
            <EmployeesList />
        </Box>
    )
}

export default EmployeesPage