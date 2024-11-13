import { IconPreview, TIconPreviewProps } from '@atoms/icons/preview';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonPreviewProps = TIconButtonProps & TIconPreviewProps;
export const ButtonPreview = (props: TButtonPreviewProps) => {
    return (
        <IconButton tooltip="Preview" {...props}>
            <IconPreview color="inherit" />
        </IconButton>
    );
};
