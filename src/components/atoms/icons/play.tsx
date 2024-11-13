import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { SvgIconProps } from '@mui/material';

export type TIconPlayProps = SvgIconProps;
export const IconPlay = (props: TIconPlayProps) => {
    return <PlayArrowIcon {...props} />;
};
