import { ROUTES } from '@constants/router';
import { useCallServices } from '@hooks/use_call_services';
import { TCronDOM } from '@models/cron/entities';
import { cronServices } from '@services/cron';
import { emit, Event, listen } from '@tauri-apps/api/event';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TCronSplitTime } from '../run-cron/hook';

type TCronFinish = {
    cron: TCronDOM;
    splitsTime: TCronSplitTime[];
};

export const usePageMainListCrons = () => {
    const [crons, setCrons] = useState<TCronDOM[]>([]);
    const [cronRun, setCronRun] = useState<TCronDOM>();
    const [cronRunSplitsTime, setCronRunSplitsTime] = useState<TCronSplitTime[]>([]);
    const [runCronWindow, setRunCronWindow] = useState<WebviewWindow>();
    const [showSnack, setShowSnack] = useState(false);

    const navigate = useNavigate();
    const { loading, callEndpointApi } = useCallServices();

    useEffect(() => {
        getCrons();
        const unlisten = listen('finish-cron', ({ payload }: Event<TCronFinish>) => {
            toggleShowSnack();
            setCronRun(payload.cron);
            setCronRunSplitsTime(payload.splitsTime);
        });

        return () => {
            unlisten.then((fn) => fn());
        };
    }, []);

    useEffect(() => {
        const unlisten = listen('request-cron', async () => {
            await emit('send-cron', cronRun);
        });

        return () => {
            unlisten.then((fn) => fn());
        };
    }, [cronRun]);

    const getCrons = async () => {
        setCrons(await callEndpointApi(cronServices.getAll()));
    };

    const handleUpdateCronFinish = async () => {
        if (!cronRun) return;
        cronRunSplitsTime.forEach((splitTime, i) => {
            if (splitTime.status === '+') {
                cronRun.splits[i].time.hours += splitTime.time.hours;
                cronRun.splits[i].time.minutes += splitTime.time.minutes;
                cronRun.splits[i].time.seconds += splitTime.time.seconds;
                cronRun.splits[i].time.milliseconds += splitTime.time.milliseconds;
                return;
            }
            cronRun.splits[i].time.hours -= splitTime.time.hours;
            cronRun.splits[i].time.minutes -= splitTime.time.minutes;
            cronRun.splits[i].time.seconds -= splitTime.time.seconds;
            cronRun.splits[i].time.milliseconds -= splitTime.time.milliseconds;
        });
        const cronRunUpdate = await callEndpointApi(cronServices.update(cronRun));
        const index = crons.findIndex(({ id }) => id === cronRunUpdate.id);
        crons[index] = cronRunUpdate;
        setCrons([...crons]);
        toggleShowSnack();
    };

    const handleRunCron = (cron: TCronDOM) => {
        setCronRun(cron);
        setRunCronWindow(
            new WebviewWindow('run-cron', {
                url: ROUTES.RUN_CRON,
                width: 400,
                height: 300,
                maxHeight: 600,
                decorations: false,
                focus: true,
                dragDropEnabled: true,
            }),
        );
    };

    const handleCloseCron = async () => {
        if (!runCronWindow) return;
        await runCronWindow.close();
        setCronRun(undefined);
        setRunCronWindow(undefined);
    };

    const handleEditCron = (cron: TCronDOM) => {
        navigate(ROUTES.EDIT_CRON, {
            state: cron,
        });
    };

    const handleDeleteCron = async (cron: TCronDOM) => {
        await callEndpointApi(cronServices.delete(cron.id));

        const index = crons.findIndex(({ id }) => cron.id === id);
        crons.splice(index, 1);
        setCrons([...crons]);
    };

    const handleCreateCron = () => navigate(ROUTES.CREATE_CRON);
    const toggleShowSnack = () => setShowSnack(!showSnack);

    return {
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
    };
};
