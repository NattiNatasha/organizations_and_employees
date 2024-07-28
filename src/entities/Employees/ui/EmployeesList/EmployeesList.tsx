import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';

import { AppDispatch } from "../../../../app/providers/StoreProvider/config/store"
import { getEmployeesByCompanyId } from "../../model/selectors/getEmployeesByCompanyId"
import { fetchEmployeesByCompanyId } from "../../model/services/fetchEmployeesByCompanyId"
import { columns } from '../../model/consts/consts';

export const EmployeesList = () => {

    const dispatch = useDispatch<AppDispatch>()
    const employees = useSelector(getEmployeesByCompanyId)
    const { id } = useParams()

    useEffect(() => {

        if (id) {
            dispatch(fetchEmployeesByCompanyId(id))
        }

    }, [id])

    return (
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
  );
}