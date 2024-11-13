import { TCronDOM } from '@models/cron/entities';
import { Card, CardHeader, Stack, Typography } from '@mui/material';
import styles from './styles.module.css';
import { ButtonPlay } from '@molecules/buttons/play';
import { ButtonEdit } from '@molecules/buttons/edit';
import { ButtonTrash } from '@molecules/buttons/trash';
import { ButtonPause } from '@molecules/buttons/pause';

export type TCronItemProps = {
    cron: TCronDOM;
    isPlay?: boolean;
    onPlay: (cron: TCronDOM) => void;
    onEdit: (cron: TCronDOM) => void;
    onDelete: (cron: TCronDOM) => void;
    onFinish: (cron: TCronDOM) => void;
};

export const CronItem = ({
    cron,
    isPlay,
    onPlay,
    onEdit,
    onDelete,
    onFinish,
}: TCronItemProps) => {
    return (
        <Card>
            <CardHeader
                title={
                    <Typography variant="h6" className={styles.cron_title}>
                        {cron.title}
                    </Typography>
                }
            />
            <Stack flexDirection={'row'} justifyContent={'space-evenly'}>
                {isPlay ? (
                    <ButtonPause onClick={() => onFinish(cron)} />
                ) : (
                    <ButtonPlay onClick={() => onPlay(cron)} />
                )}
                <ButtonEdit onClick={() => onEdit(cron)} />
                <ButtonTrash onClick={() => onDelete(cron)} />
            </Stack>
        </Card>
    );
};
