import { IconPause, TIconPauseProps } from '@atoms/icons/pause';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonPauseProps = TIconButtonProps & TIconPauseProps;
export const ButtonPause = (props: TButtonPauseProps) => {
    return (
        <IconButton tooltip="Finish" {...props}>
            <IconPause color="inherit" />
        </IconButton>
    );
};
