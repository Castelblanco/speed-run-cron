import PauseIcon from '@mui/icons-material/Pause';
import { SvgIconProps } from '@mui/material';

export type TIconPauseProps = SvgIconProps;
export const IconPause = (props: TIconPauseProps) => {
    return <PauseIcon {...props} />;
};
