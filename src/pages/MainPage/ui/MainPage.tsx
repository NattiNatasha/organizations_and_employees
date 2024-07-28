import { Box, Typography } from "@mui/material"
import { CompaniesList } from "../../../entities/Companies"
import { AddCompany } from "../../../features/AddCompany"

const MainPage = () => {
    
    return (
        <Box
            sx={{
            height: 400,
            width: '100%',
        }}
        >
            <Typography
                variant="h3"
                component="h3"
                sx={{ textAlign: 'center', mt: 3, mb: 3 }}
            >
                Справочник организаций
            </Typography>
            <AddCompany />
            <CompaniesList />
        </Box>
    )
}

export default MainPage