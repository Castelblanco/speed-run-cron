import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Stack,
    TextField,
} from '@mui/material';
import styles from './styles.module.css';
import { TCronDOM } from '@models/cron/entities';
import { ChangeEvent, Fragment } from 'react';
import { ButtonAdd } from '@molecules/buttons/add';
import { ButtonTrash } from '@molecules/buttons/trash';
import { ButtonBack } from '@molecules/buttons/back';
import { ButtonPreview } from '@molecules/buttons/preview';
import { ButtonSave } from '@molecules/buttons/save';
import { ButtonPreviewOff } from '@molecules/buttons/preview_off';

export type TFormCronProps = {
    cron: TCronDOM;
    loading?: boolean;
    openPreview?: boolean;
    onChangeTitle: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onAddSplit: () => void;
    onRemoveSplit: (index: number) => void;
    onChangeSplit: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
    ) => void;
    onBack: () => void;
    onPreview: () => void;
    onClosePreview: () => void;
    onSave: () => void;
};

export const FormCron = ({
    cron,
    loading,
    openPreview,
    onAddSplit,
    onChangeTitle,
    onRemoveSplit,
    onChangeSplit,
    onBack,
    onPreview,
    onClosePreview,
    onSave,
}: TFormCronProps) => {
    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'} marginY={1}>
                <Card className={styles.boxForm}>
                    <Box zIndex={10} position={'relative'}>
                        <CardHeader title="Create Cron" />
                        <CardContent>
                            <Stack gap={2}>
                                <TextField
                                    onChange={onChangeTitle}
                                    label="Title"
                                    value={cron.title}
                                    fullWidth
                                />
                            </Stack>
                        </CardContent>
                        <Divider />

                        <CardHeader title="Splits" />
                        <CardContent>
                            <Stack gap={2}>
                                {cron.splits.map((split, i) => (
                                    <Fragment key={i}>
                                        <Stack
                                            flexDirection={'row'}
                                            alignItems={'center'}
                                            gap={1}
                                            key={i}
                                        >
                                            {i === 0 ? (
                                                <ButtonAdd onClick={onAddSplit} />
                                            ) : (
                                                <ButtonTrash
                                                    onClick={() => onRemoveSplit(i)}
                                                />
                                            )}
                                            <TextField
                                                onChange={(e) => onChangeSplit(e, i)}
                                                label="Name"
                                                value={split.name}
                                                name="name"
                                                fullWidth
                                            />
                                        </Stack>
                                        <Stack
                                            flexDirection={'row'}
                                            justifyContent={'right'}
                                            gap={2}
                                        >
                                            <TextField
                                                onChange={(e) => onChangeSplit(e, i)}
                                                className={styles.input_time}
                                                label="Hours"
                                                value={split.time.hours}
                                                name="hours"
                                                type="number"
                                            />
                                            <TextField
                                                onChange={(e) => onChangeSplit(e, i)}
                                                className={styles.input_time}
                                                label="Minutes"
                                                value={split.time.minutes}
                                                name="minutes"
                                                type="number"
                                            />
                                            <TextField
                                                onChange={(e) => onChangeSplit(e, i)}
                                                className={styles.input_time}
                                                label="seconds"
                                                value={split.time.seconds}
                                                name="seconds"
                                                type="number"
                                            />
                                            <TextField
                                                onChange={(e) => onChangeSplit(e, i)}
                                                className={styles.input_time_milli}
                                                label="Milliseconds"
                                                value={split.time.milliseconds}
                                                name="milliseconds"
                                                type="number"
                                            />
                                        </Stack>
                                    </Fragment>
                                ))}
                            </Stack>
                        </CardContent>
                    </Box>
                </Card>
            </Stack>
            <Stack position={'fixed'} bottom={20} right={20}>
                <ButtonBack onClick={onBack} />
                {openPreview ? (
                    <ButtonPreviewOff onClick={onClosePreview} />
                ) : (
                    <ButtonPreview onClick={onPreview} />
                )}
                <ButtonSave onClick={onSave} loading={loading} />
            </Stack>
        </>
    );
};
