import * as yup from 'yup'

export const schemaAddEditCompany = () => {
    return yup.object().shape({
        title: yup
            .string()
            .required('Обязательное поле'),
        address: yup
            .string()
            .required('Обязательное поле'),
        INN: yup
            .string()
            .required('Обязательное поле')
            .matches(/^[0-9]+$/, 'ИНН может содержать только цифры')
            .matches(
                /^(\d{10}|\d{12})$/,
                'В поле можно ввести только 10 либо 12 символов'
            ),
    })
}