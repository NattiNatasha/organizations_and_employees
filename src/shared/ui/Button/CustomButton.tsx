import { memo, ReactNode } from "react";
import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { grey } from '@mui/material/colors';

interface ButtonProps {
    className?: string;
    children: ReactNode;
    handleClick: () => void;
};

export const CustomButton = memo(({className, children, handleClick}: ButtonProps) => {

    const { classes, cx } = useStyles();

    return (
        <Button 
            variant="contained"
            size="large"
            className={cx(classes.root, className)}
            onClick={handleClick}
        >
            {children}
        </Button>
    );
})

const useStyles = tss
    .create(()=> ({
        root: {
            background: grey[900],
            "&:hover": {
                background: grey[700],
        },
    }
}));