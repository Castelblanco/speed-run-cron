import { ButtonCreate } from '@molecules/buttons/create';
import { Grid2, Snackbar, Stack } from '@mui/material';
import { NotCrons } from '@templates/not_crons';
import { PageLoading } from '@templates/page_loading';
import { CronItem } from 'src/components/organisms/cron/item';
import { usePageMainListCrons } from './hook';
import { ButtonPrimary } from '@molecules/buttons/primary';

export default function PageMainListCrons() {
    const {
        crons,
        cronRun,
        showSnack,
        loading,
        handleUpdateCronFinish,
        handleRunCron,
        handleCloseCron,
        handleEditCron,
        handleDeleteCron,
        handleCreateCron,
        toggleShowSnack,
    } = usePageMainListCrons();

    if (loading) return <PageLoading />;
    if (crons.length === 0) return <NotCrons />;

    return (
        <>
            <Grid2
                display={'grid'}
                gridTemplateColumns="repeat(auto-fill, minmax(190px, 1fr))"
                gridAutoRows={130}
                padding={2}
                paddingX={8}
                gap={2}
            >
                {crons.map((cron, i) => (
                    <CronItem
                        key={i}
                        cron={cron}
                        isPlay={cronRun?.id === cron.id}
                        onPlay={handleRunCron}
                        onFinish={handleCloseCron}
                        onEdit={handleEditCron}
                        onDelete={handleDeleteCron}
                    />
                ))}
            </Grid2>
            <Stack position="fixed" bottom={20} right={10}>
                <ButtonCreate onClick={handleCreateCron} />
            </Stack>
            <Snackbar
                open={showSnack}
                message="You want to save this new time"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                action={
                    <Stack flexDirection={'row'} gap={1}>
                        <ButtonPrimary
                            size="small"
                            onClick={handleUpdateCronFinish}
                            loading={loading}
                        >
                            save
                        </ButtonPrimary>
                        <ButtonPrimary size="small" onClick={toggleShowSnack}>
                            cancel
                        </ButtonPrimary>
                    </Stack>
                }
            />
        </>
    );
}
