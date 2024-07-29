import { useCallback, useState } from "react"
import { tss } from "tss-react"

import { AddEditEmployeeForm } from "../../entities/Employees/ui/AddEditEmployee/AddEditEmployee"
import { CustomButton } from "../../shared/ui/Button"

export const AddEmployee = () => {
    const [showModal, setShowModal] = useState(false)

    const { classes } = useStyles();

    const handleAddEmployee = useCallback(() => {
        setShowModal(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [])

    return (
        <>
            <CustomButton 
                handleClick={handleAddEmployee}
                className={classes.custombutton}
            >
                ДОБАВИТЬ
            </CustomButton>
            <AddEditEmployeeForm
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