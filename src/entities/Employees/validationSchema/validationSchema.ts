import * as yup from 'yup'

export const schemaAddEditEmployee = () => {
    return yup.object().shape({
        firstName: yup
            .string()
            .required('Обязательное поле'),
        lastName: yup
            .string()
            .required('Обязательное поле'),
        position: yup
            .string()
            .required('Обязательное поле')
    })
}