import { useCallback, useState } from "react"
import { tss } from "tss-react"

import { AddEditCompanyForm } from "../../entities/Companies/ui/AddEditCompany/AddEditCompanyForm"
import { CustomButton } from "../../shared/ui/Button"

export const AddCompany = () => {
    const [showModal, setShowModal] = useState(false)

    const { classes } = useStyles();

    const handleAddCompany = useCallback(() => {
        setShowModal(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [])

    return (
        <>
            <CustomButton 
                handleClick={handleAddCompany}
                className={classes.custombutton}
            >
                ДОБАВИТЬ
            </CustomButton>
            <AddEditCompanyForm 
                open={showModal} 
                handleClose={handleCloseModal} 
            />
        </>
    )
}

const useStyles = tss
    .create(()=> ({
        custombutton: {
            marginBottom: '10px', 
            marginLeft: 'auto',
            display: 'flex'
    }
}));