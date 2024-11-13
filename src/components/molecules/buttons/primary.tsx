import { Button, TButtonProps } from '@atoms/button';
import { CircularProgress } from '@mui/material';

export type TButtonPrimaryProps = TButtonProps & {
    loading?: boolean;
};
export const ButtonPrimary = (props: TButtonPrimaryProps) => {
    return (
        <Button {...props} color="primary" variant="contained">
            {props.loading ? (
                <CircularProgress color="inherit" size={24} />
            ) : (
                props.children
            )}
        </Button>
    );
};
