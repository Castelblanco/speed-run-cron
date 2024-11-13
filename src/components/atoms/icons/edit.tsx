import EditIcon from '@mui/icons-material/Edit';
import { SvgIconProps } from '@mui/material';

export type TIconEditProps = SvgIconProps;
export const IconEdit = (props: TIconEditProps) => {
    return <EditIcon {...props} />;
};
