import DeleteIcon from '@mui/icons-material/Delete';
import { SvgIconProps } from '@mui/material';

export type TIconTrashProps = SvgIconProps;
export const IconTrash = (props: TIconTrashProps) => {
    return <DeleteIcon {...props} />;
};
