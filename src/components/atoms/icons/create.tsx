import AddBoxIcon from '@mui/icons-material/AddBox';
import { SvgIconProps } from '@mui/material';

export type TIconCreateProps = SvgIconProps;
export const IconCreate = (props: TIconCreateProps) => {
    return <AddBoxIcon {...props} />;
};
