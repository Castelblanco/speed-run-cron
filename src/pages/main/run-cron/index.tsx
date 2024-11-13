import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { PageLoading } from '@templates/page_loading';
import { green, red } from '@mui/material/colors';
import { usePageMainRunCron } from './hook';
import { formatSplitTimeToString } from '@helpers/format_split_time_to_string';
import { getTimeFormat } from '@helpers/get_time_format';
import { comparateTimes } from '@tools/datetime';
import styles from './style.module.css';

export default function PageMainRunCron() {
    const { cron, splitsTime, time, calculateSplitTimeDiferent } = usePageMainRunCron();

    if (!cron) return <PageLoading />;
    return (
        <Stack>
            <Box textAlign={'center'} py={1}>
                <Typography variant="h5">{cron.title}</Typography>
            </Box>

            <Divider />
            <List>
                {cron.splits.map((split, i) => {
                    const timeIsSuperior = comparateTimes(
                        getTimeFormat(time),
                        split.time,
                    );
                    const splitTime = splitsTime[i];
                    return (
                        <ListItem key={i}>
                            <Stack
                                width={'100%'}
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                            >
                                <Typography className={styles.split_name}>
                                    {split.name}
                                </Typography>
                                <Stack
                                    width={'50%'}
                                    flexDirection={'row'}
                                    justifyContent={'space-between'}
                                >
                                    {splitTime ? (
                                        <Typography
                                            sx={{
                                                color:
                                                    splitTime.color ||
                                                    (timeIsSuperior
                                                        ? red[500]
                                                        : green[500]),
                                            }}
                                        >
                                            {splitTime.status ||
                                                (timeIsSuperior ? '+' : '-')}{' '}
                                            {formatSplitTimeToString(
                                                calculateSplitTimeDiferent(
                                                    splitTime.time,
                                                    i,
                                                ),
                                            )}
                                        </Typography>
                                    ) : (
                                        <Box />
                                    )}
                                    <Typography>
                                        {formatSplitTimeToString(split.time)}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                    );
                })}
            </List>

            <Divider />
            <ListItem>
                <Box width={'100%'} textAlign={'right'}>
                    <Typography variant="h3">
                        {formatSplitTimeToString(getTimeFormat(time))}
                    </Typography>
                </Box>
            </ListItem>
        </Stack>
    );
}
