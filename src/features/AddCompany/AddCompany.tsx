import { useCallback, useState } from "react"

import { Add } from "@mui/icons-material"
import { Tooltip, IconButton } from "@mui/material"
import { grey } from "@mui/material/colors"

import { AddEditCompanyForm } from "../../entities/Companies/ui/AddEditCompany/AddEditCompanyForm"

export const AddCompany = () => {
    const [showModal, setShowModal] = useState(false)

    const handleAddCompany = useCallback(() => {
        setShowModal(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [])

    return (
        <>
            <Tooltip title="Добавить">
                <IconButton 
                    onClick={handleAddCompany} 
                    sx={{display: 'flex', background: grey[200], marginBottom: '10px', marginLeft: 'auto'}}>
                    <Add />
                </IconButton>
            </Tooltip>
            <AddEditCompanyForm 
                open={showModal} 
                handleClose={handleCloseModal} 
            />
        </>
    )
}