import { useDispatch } from "react-redux";
import { Close } from "@mui/icons-material"
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    IconButton, 
    TextField 
} from "@mui/material"
import { Formik } from "formik";
import { AppDispatch } from "../../../../app/providers/StoreProvider/config/store";
import { editCompany } from "../../model/services/editCompany";
import { addCompany } from "../../model/services/addCompany";
import { schemaAddEditCompany } from "../../validationSchema/validationSchema";
import { Company } from "../../model/types/company";

interface AddEditCompanyFormProps {
  data?: Company;
  open: boolean;
  handleClose: () => void;
}

export const AddEditCompanyForm = ({ open, handleClose, data }: AddEditCompanyFormProps) => {

  const dispatch = useDispatch<AppDispatch>()

  return (

    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>
      {data?.id ? 'Редактировать компанию' : 'Добавить компанию'}
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
          title: data?.title || "",
          address: data?.address || "",
          INN: data?.INN || null
        }}
        validationSchema={schemaAddEditCompany}
        onSubmit={(values) => {

          if (data?.id) {
            const editQuery = {
              ...data,
              ...values
            }
            dispatch(editCompany(editQuery))
          } else {
            const addQuery = {
              ...values,
              id: Date.now().toString()
            }
            dispatch(addCompany(addQuery))
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
              id="title"
              label="Наименование"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.title && errors.title)}
              helperText={errors.title?.toString()}
              type="text"
              fullWidth
              required
            />
            <TextField
              margin="normal"
              variant="standard"
              id="address"
              label="Адрес"
              type="text"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.address && errors.address)}
              helperText={errors.address?.toString()}
              fullWidth
              required
            />
            <TextField
              margin="normal"
              variant="standard"
              id="INN"
              label="ИНН"
              type="text"
              value={values.INN}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.INN && errors.INN)}
              helperText={errors.INN?.toString()}
              fullWidth
              required
            />
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button 
            type="submit" 
            variant="contained"
            disabled={isSubmitting || 
                      Boolean(touched.title && errors.title) || 
                      Boolean(touched.address && errors.address) ||
                      Boolean(touched.INN && errors.INN)}
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