import VisibilityIcon from '@mui/icons-material/Visibility';
import { SvgIconProps } from '@mui/material';

export type TIconPreviewProps = SvgIconProps;
export const IconPreview = (props: TIconPreviewProps) => {
    return <VisibilityIcon {...props} />;
};
