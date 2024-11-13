import { IconPreviewOff, TIconPreviewOffProps } from '@atoms/icons/preview_off';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonPreviewOffProps = TIconButtonProps & TIconPreviewOffProps;
export const ButtonPreviewOff = (props: TButtonPreviewOffProps) => {
    return (
        <IconButton tooltip="Remove Preview" {...props}>
            <IconPreviewOff color="inherit" />
        </IconButton>
    );
};
