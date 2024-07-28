import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import { AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import { deleteEmployee } from '../../model/services/deleteEmployee';
import { AddEditEmployeeForm } from '../AddEditEmployee/AddEditEmployee';

export const EmployeesActions = ({params}: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const [showModal, setShowModal] = useState(false)

    const handleDeleteButtonClick = useCallback(() => {
        dispatch(deleteEmployee(params.row.id))
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [])


    const handleEditEmployee = useCallback(() => {
        setShowModal(true)
    }, [])
  
  return (
    <>
      <Box>
        <Tooltip title="Редактировать">
          <IconButton onClick={handleEditEmployee}>
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
      <AddEditEmployeeForm 
          open={showModal} 
          handleClose={handleCloseModal} 
          data={params.row}
      />
    </>
  );
};
