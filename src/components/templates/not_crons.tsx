import { ROUTES } from '@constants/router';
import { ButtonPrimary } from '@molecules/buttons/primary';
import { Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotCrons = () => {
    const navigate = useNavigate();
    const handleCreateCron = () => navigate(ROUTES.CREATE_CRON);

    return (
        <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <Typography variant="h4">You haven't Crons</Typography>
            <Divider
                variant="inset"
                sx={{
                    height: 10,
                }}
            />
            <ButtonPrimary onClick={handleCreateCron}>Create my first Cron</ButtonPrimary>
        </Stack>
    );
};
