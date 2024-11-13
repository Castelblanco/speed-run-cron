import {
    CircularProgress,
    IconButton as IconBtn,
    IconButtonProps,
    Tooltip,
} from '@mui/material';

export type TIconButtonProps = IconButtonProps & {
    tooltip?: string;
    loading?: boolean;
};
export const IconButton = (props: TIconButtonProps) => {
    return (
        <Tooltip title={props.tooltip}>
            <IconBtn size="large" {...props}>
                {props.loading ? <CircularProgress size={24} /> : props.children}
            </IconBtn>
        </Tooltip>
    );
};
