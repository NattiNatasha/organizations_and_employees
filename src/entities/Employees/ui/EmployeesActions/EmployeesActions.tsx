import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Box, IconButton, Tooltip } from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';

import { AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import { deleteEmployee } from '../../model/services/deleteEmployee';

export const EmployeesActions = ({params}: any) => {
    const dispatch = useDispatch<AppDispatch>()

    const handleDeleteButtonClick = useCallback(() => {
        dispatch(deleteEmployee(params.row.id))
    }, [])
  
  return (
    <Box>
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
