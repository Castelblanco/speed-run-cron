import { IconPlay, TIconPlayProps } from '@atoms/icons/play';
import { IconButton, TIconButtonProps } from './icon';

export type TButtonPlayProps = TIconButtonProps & TIconPlayProps;
export const ButtonPlay = (props: TButtonPlayProps) => {
    return (
        <IconButton tooltip="Play" {...props}>
            <IconPlay color="inherit" />
        </IconButton>
    );
};
