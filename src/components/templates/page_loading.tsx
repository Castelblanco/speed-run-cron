import { CircularProgress, Modal, Stack } from '@mui/material';

export const PageLoading = () => {
    return (
        <Modal open>
            <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <CircularProgress />
            </Stack>
        </Modal>
    );
};
