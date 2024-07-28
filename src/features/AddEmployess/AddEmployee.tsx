import { useCallback, useState } from "react"

import { Add } from "@mui/icons-material"
import { Tooltip, IconButton } from "@mui/material"
import { grey } from "@mui/material/colors"
import { AddEditEmployeeForm } from "../../entities/Employees/ui/AddEditEmployee/AddEditEmployee"

export const AddEmployee = () => {
    const [showModal, setShowModal] = useState(false)

    const handleAddEmployee = useCallback(() => {
        setShowModal(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [])

    return (
        <>
            <Tooltip title="Добавить">
                <IconButton 
                    onClick={handleAddEmployee} 
                    sx={{display: 'flex', background: grey[200], marginBottom: '10px', marginLeft: 'auto'}}>
                    <Add />
                </IconButton>
            </Tooltip>
            <AddEditEmployeeForm
                open={showModal} 
                handleClose={handleCloseModal} 
            />
        </>
    )
}