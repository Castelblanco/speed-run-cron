import { IconCreate, TIconCreateProps } from '@atoms/icons/create';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonCreateProps = TIconButtonProps & TIconCreateProps;
export const ButtonCreate = (props: TButtonCreateProps) => {
    return (
        <IconButton tooltip="Create" {...props}>
            <IconCreate color="inherit" />
        </IconButton>
    );
};
