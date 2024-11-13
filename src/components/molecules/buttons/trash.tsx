import { IconTrash, TIconTrashProps } from '@atoms/icons/trash';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonTrashProps = TIconButtonProps & TIconTrashProps;
export const ButtonTrash = (props: TButtonTrashProps) => {
    return (
        <IconButton tooltip="Delete" {...props}>
            <IconTrash color="inherit" />
        </IconButton>
    );
};
