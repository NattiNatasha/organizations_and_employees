import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';

import { AppDispatch } from "../../../../app/providers/StoreProvider/config/store"
import { getEmployeesByCompanyId } from "../../model/selectors/getEmployeesByCompanyId"
import { fetchEmployeesByCompanyId } from "../../model/services/fetchEmployeesByCompanyId"
import { columns } from '../../model/consts/consts';
import { CustomButton } from '../../../../shared/ui/Button';

export const EmployeesList = () => {

    const dispatch = useDispatch<AppDispatch>()
    const employees = useSelector(getEmployeesByCompanyId)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        if (id) {
            dispatch(fetchEmployeesByCompanyId(id))
        }

    }, [id])

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
            <DataGrid
                columns={columns}
                rows={employees.data}
                getRowId={(row) => row.id}
                getRowSpacing={(params) => ({
                top: params.isFirstVisible ? 0 : 5,
                bottom: params.isLastVisible ? 0 : 5,
                })}
                sx={{
                [`& .${gridClasses.row}`]: {
                    bgcolor: (theme) =>
                    theme.palette.mode === 'light' ? grey[200] : grey[900],
                },
            }}
        />
    </Box>
  );
}