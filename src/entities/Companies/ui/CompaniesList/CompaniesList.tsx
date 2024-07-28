import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';

import { AppDispatch } from "../../../../app/providers/StoreProvider/config/store"
import { getCompaniesList } from "../../model/selectors/getCompaniesList"
import { fetchCompaniesList } from "../../model/services/fetchCompaniesList"
import { columns } from '../../model/consts/consts';

export const CompaniesList = () => {

    const dispatch = useDispatch<AppDispatch>()
    const companies = useSelector(getCompaniesList)

    useEffect(() => {

        dispatch(fetchCompaniesList(null))

    }, [dispatch])

    return (
        <DataGrid
            columns={columns}
            rows={companies.companies}
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