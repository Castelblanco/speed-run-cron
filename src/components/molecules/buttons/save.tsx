import { IconSave, TIconSaveProps } from '@atoms/icons/save';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonSaveProps = TIconButtonProps & TIconSaveProps;
export const ButtonSave = (props: TButtonSaveProps) => {
    return (
        <IconButton tooltip="Save" {...props}>
            <IconSave color="inherit" />
        </IconButton>
    );
};
