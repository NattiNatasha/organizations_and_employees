import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Close } from "@mui/icons-material"
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    FormControl, 
    IconButton, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField 
} from "@mui/material"

import { Formik } from "formik";

import { AppDispatch } from "../../../../app/providers/StoreProvider/config/store";
import { editEmployee } from "../../model/services/editEmployee";
import { addEmployee } from "../../model/services/addEmployee";
import { schemaAddEditEmployee } from "../../validationSchema/validationSchema";
import { Employee } from "../../model/types/EmployeesSchema";
import { getPositions } from "../../model/selectors/getPositions";
import { fetchPositions } from "../../model/services/fetchPositions";

interface AddEditEmployeeFormProps {
  data?: Employee;
  open: boolean;
  handleClose: () => void;
}

export const AddEditEmployeeForm = ({ open, handleClose, data }: AddEditEmployeeFormProps) => {

  const dispatch = useDispatch<AppDispatch>()
  const positions = useSelector(getPositions)

  useEffect(() => {

    dispatch(fetchPositions(null))

  }, [dispatch])

  const { id } = useParams()

  return (

    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>
      {data?.id ? 'Редактировать данные о сотруднике' : 'Добавить сотрудника'}
      <IconButton
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: (theme) => theme.palette.grey[500],
        }}
        onClick={handleClose}
      >
        <Close />
      </IconButton>
    </DialogTitle>
    <Formik 
        initialValues={{
          firstName: data?.firstName || "",
          lastName: data?.lastName || "",
          position: data?.position || ""
        }}
        validationSchema={schemaAddEditEmployee}
        onSubmit={(values) => {

          if (data?.id) {
            const editQuery = {
              ...data,
              ...values,
              meta: {
                companyId: id
              }
            }
            dispatch(editEmployee(editQuery))
          } else {
            const addQuery = {
              ...values,
              id: Date.now().toString(),
              meta: {
                companyId: id
              }
            }
            dispatch(addEmployee(addQuery))
          }
          handleClose()
        }}
      >
      {({ handleSubmit, values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
        <DialogContent dividers>
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="firstName"
              label="Имя"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={errors.firstName?.toString()}
              type="text"
              fullWidth
              required
            />
            <TextField
              margin="normal"
              variant="standard"
              id="lastName"
              label="Фамилия"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={errors.lastName?.toString()}
              fullWidth
              required
            />
            <FormControl fullWidth sx={{marginTop: "10px"}}>
              <InputLabel id="position-label">Должность</InputLabel>
              <Select
                labelId="position-label"
                id="position"
                name="position"
                value={values.position}
                label="Должность"
                onChange={handleChange}
                required
              >
                {positions?.data?.map(({id, title}) => (
                  <MenuItem key={id} value={title}>{title}</MenuItem>
                ))}
              </Select>
            </FormControl>
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button 
            type="submit" 
            variant="contained"
            disabled={isSubmitting || 
                      Boolean(touched.firstName && errors.firstName) || 
                      Boolean(touched.lastName && errors.lastName) ||
                      Boolean(touched.position && errors.position)}
          >
            Сохранить
          </Button>
        </DialogActions>
      </form>
      )}
    </Formik>
  </Dialog>
  )
}