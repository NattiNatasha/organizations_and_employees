import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Box, IconButton, Tooltip } from '@mui/material';
import { Add, Delete, Edit, Preview } from '@mui/icons-material';

import { AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import { deleteCompany } from '../../model/services/deleteCompany';

export const CompaniesActions = ({params}: any) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const handleShowEmployeesButtonClick = useCallback(() => {
        navigate(`/employees/company/${params.row.id}`)
    }, [])

    const handleDeleteButtonClick = useCallback(() => {
        dispatch(deleteCompany(params.row.id))
    }, [])
  
  return (
    <Box>
      <Tooltip title="К списку сотрудников">
        <IconButton
          onClick={handleShowEmployeesButtonClick}
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Добавить">
        <IconButton onClick={() => {}}>
          <Add />
        </IconButton>
      </Tooltip>
      <Tooltip title="Редактировать">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Удалить">
        <IconButton
          onClick={handleDeleteButtonClick}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
