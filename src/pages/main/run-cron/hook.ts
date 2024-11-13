import { getTimeFormat } from '@helpers/get_time_format';
import { useWindowMove } from '@hooks/use_window_move';
import { TCronDOM, TCronTimeDOM } from '@models/cron/entities';
import { green, red } from '@mui/material/colors';
import { LogicalSize } from '@tauri-apps/api/dpi';
import { emit, Event, listen } from '@tauri-apps/api/event';
import { comparateTimes, substractTimes } from '@tools/datetime';
import { useEffect, useState } from 'react';

export type TCronSplitTime = {
    time: TCronTimeDOM;
    color: string;
    status: '+' | '-' | null;
};

export const usePageMainRunCron = () => {
    const [cron, setCron] = useState<TCronDOM>();
    const [splitsTime, setSplitsTime] = useState<TCronSplitTime[]>([]);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const { appWindow } = useWindowMove();

    useEffect(() => {
        emit('request-cron');
        const unlisten = listen('send-cron', ({ payload }: Event<TCronDOM>) => {
            setCron(payload);
        });

        return () => {
            unlisten.then((fn) => fn());
        };
    }, []);

    useEffect(() => {
        if (!cron) return;
        resizeWindow(cron);
    }, [cron]);

    useEffect(() => {
        let interval: number | null = null;

        if (isRunning) {
            interval = setInterval(() => setTime((pre) => pre + 10), 10);
        }

        return () => {
            clearInterval(interval!);
        };
    }, [isRunning]);

    useEffect(() => {
        console.log({ time });

        document.addEventListener('keyup', handleEnter);
        return () => {
            document.removeEventListener('keyup', handleEnter);
        };
    }, [cron, splitsTime, time]);

    const handleEnter = async (e: KeyboardEvent) => {
        if (!cron) return;
        if (e.code === 'KeyR') return location.reload();
        if (e.code !== 'Enter') return;
        if (splitsTime.length === 0) {
            setSplitsTime([
                {
                    time: cron.splits[0].time,
                    color: '',
                    status: null,
                },
            ]);
            return setIsRunning(true);
        }
        controlSplitTime();
    };

    const resizeWindow = async (cron: TCronDOM) => {
        const { width } = await appWindow.innerSize();
        await appWindow.setSize(new LogicalSize(width, cron.splits.length * 47 + 124));
    };

    const finishCron = () => {
        setIsRunning(false);
        emit('finish-cron', {
            cron,
            splitsTime,
        });
    };

    const controlSplitTime = () => {
        if (!cron) return;
        const splitTime = splitsTime.pop();
        const timeFormat = getTimeFormat(time);

        const timeIsSuperior = comparateTimes(timeFormat, splitTime!.time);
        const index = splitsTime.push({
            time: substractTimes(timeFormat, splitTime!.time),
            color: timeIsSuperior ? red[500] : green[500],
            status: timeIsSuperior ? '+' : '-',
        });

        if (splitsTime.length === cron.splits.length) {
            setSplitsTime([...splitsTime]);
            return finishCron();
        }

        splitsTime.push({
            time: cron.splits[index].time,
            color: '',
            status: null,
        });
        setSplitsTime([...splitsTime]);
    };

    const calculateSplitTimeDiferent = (splitTime: TCronTimeDOM, index: number) => {
        if (index === splitsTime.length - 1 && isRunning) {
            splitTime = substractTimes(getTimeFormat(time), splitTime);
        }
        return splitTime;
    };

    return {
        cron,
        splitsTime,
        time,
        calculateSplitTimeDiferent,
    };
};
