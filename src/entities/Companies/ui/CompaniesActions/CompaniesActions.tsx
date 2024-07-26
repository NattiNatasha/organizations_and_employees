import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, IconButton, Tooltip } from '@mui/material';
import { Add, Delete, Edit, Preview } from '@mui/icons-material';

import { AppDispatch } from '../../../../app/providers/StoreProvider/config/store';
import { deleteCompany } from '../../model/services/deleteCompany';
import { AddEditCompanyForm } from '../AddEditCompany/AddEditCompanyForm';

export const CompaniesActions = ({params}: any) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [showModal, setShowModal] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)

    const handleShowEmployeesButtonClick = useCallback(() => {
        navigate(`/employees/company/${params.row.id}`)
    }, [])

    const handleDeleteButtonClick = useCallback(() => {
        dispatch(deleteCompany(params.row.id))
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [])

    const handleAddCompany = useCallback(() => {
        setIsEditMode(false)
        setShowModal(true)
    }, [])

    const handleEditCompany = useCallback(() => {
        setIsEditMode(true)
        setShowModal(true)
    }, [])
  
  return (
    <>
    <Box>
      <Tooltip title="К списку сотрудников">
        <IconButton
          onClick={handleShowEmployeesButtonClick}
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Добавить">
        <IconButton onClick={handleAddCompany}>
          <Add />
        </IconButton>
      </Tooltip>
      <Tooltip title="Редактировать">
        <IconButton onClick={handleEditCompany}>
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
    <AddEditCompanyForm 
        open={showModal} 
        handleClose={handleCloseModal} 
        data={isEditMode ? params.row : null}/>
    </>
  );
};
