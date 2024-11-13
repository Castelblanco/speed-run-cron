import { IconEdit, TIconEditProps } from '@atoms/icons/edit';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonEditProps = TIconButtonProps & TIconEditProps;
export const ButtonEdit = (props: TButtonEditProps) => {
    return (
        <IconButton tooltip="Edit" {...props}>
            <IconEdit color="inherit" />
        </IconButton>
    );
};
