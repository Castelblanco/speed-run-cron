import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SvgIconProps } from '@mui/material';

export type TIconLeftArrowProps = SvgIconProps;
export const IconLeftArrow = (props: TIconLeftArrowProps) => {
    return <ArrowBackIcon {...props} />;
};
