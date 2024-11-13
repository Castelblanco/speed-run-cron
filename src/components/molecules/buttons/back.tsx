import { IconLeftArrow, TIconLeftArrowProps } from '@atoms/icons/left_arrow';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonBackProps = TIconButtonProps & TIconLeftArrowProps;
export const ButtonBack = (props: TButtonBackProps) => {
    return (
        <IconButton tooltip="Back" {...props}>
            <IconLeftArrow color="inherit" />
        </IconButton>
    );
};
