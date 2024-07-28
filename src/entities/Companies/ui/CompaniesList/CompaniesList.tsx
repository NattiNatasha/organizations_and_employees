import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { Box, Typography } from '@mui/material';
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
        <Box
            sx={{
            height: 400,
            width: '100%',
        }}
        >
            <Typography
                variant="h3"
                component="h3"
                sx={{ textAlign: 'center', mt: 3, mb: 3 }}
            >
                Справочник организаций
            </Typography>
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
    </Box>
  );
}