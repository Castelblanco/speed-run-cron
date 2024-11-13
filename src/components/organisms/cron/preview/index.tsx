import { TCronDOM } from '@models/cron/entities';
import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { formatSplitTimeToString } from '@helpers/format_split_time_to_string';

import styles from './style.module.css';

export type TCronPreviewProps = {
    cron: TCronDOM;
};

export const CronPreview = ({ cron }: TCronPreviewProps) => {
    return (
        <Stack>
            {cron.title && (
                <Box textAlign={'center'} py={1}>
                    <Typography variant="h5">{cron.title}</Typography>
                </Box>
            )}

            <Divider />
            <List className={styles.split_list}>
                {cron.splits.map((split, i) => (
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
                                <Typography
                                    sx={{
                                        color: green[500],
                                    }}
                                >
                                    - 00.00
                                </Typography>
                                <Typography>
                                    {formatSplitTimeToString(split.time)}
                                </Typography>
                            </Stack>
                        </Stack>
                    </ListItem>
                ))}
            </List>

            <Divider />
            <ListItem>
                <Box width={'100%'} textAlign={'right'}>
                    <Typography variant="h3">00.00</Typography>
                </Box>
            </ListItem>
        </Stack>
    );
};
