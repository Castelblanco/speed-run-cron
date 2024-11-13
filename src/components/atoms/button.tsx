import { Button as Btn, ButtonProps } from '@mui/material';

export type TButtonProps = ButtonProps;
export const Button = (props: TButtonProps) => {
    return <Btn {...props} />;
};
