import AddIcon from '@mui/icons-material/Add';
import { SvgIconProps } from '@mui/material';

export type TIconAddProps = SvgIconProps;
export const IconAdd = (props: TIconAddProps) => {
    return <AddIcon {...props} />;
};
