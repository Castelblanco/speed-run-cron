import { IconAdd, TIconAddProps } from '@atoms/icons/add';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonAddProps = TIconButtonProps & TIconAddProps;
export const ButtonAdd = (props: TButtonAddProps) => {
    return (
        <IconButton tooltip="Add" {...props}>
            <IconAdd color="inherit" />
        </IconButton>
    );
};
