import { ROUTES } from '@constants/router';
import { validValueOfTime } from '@helpers/valid_value_of_time';
import { useCallServices } from '@hooks/use_call_services';
import { TCronDOM, TCronSplitDOM, TCronTimeDOM } from '@models/cron/entities';
import { cronServices } from '@services/cron';
import { emit, listen } from '@tauri-apps/api/event';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INITIAL_STATE_SPLIT: TCronSplitDOM = {
    name: '',
    time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    },
};

export const usePageMainCreateCron = () => {
    const [cron, setCron] = useState<TCronDOM>({
        id: '',
        title: '',
        splits: [structuredClone(INITIAL_STATE_SPLIT)],
        time: structuredClone(INITIAL_STATE_SPLIT.time),
    });
    const [previewCronWindow, setPreviewCronWindow] = useState<WebviewWindow>();

    const navigate = useNavigate();
    const { loading, callEndpointApi } = useCallServices();

    useEffect(() => {
        if (!previewCronWindow) return;

        emit('send-preview-cron', cron);
        const unlisten = listen('request-preview-cron', async () => {
            await emit('send-preview-cron', cron);
        });
        return () => {
            unlisten.then((fn) => fn());
        };
    }, [cron, previewCronWindow]);

    const handleChangeTitle = ({
        target,
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCron({ ...cron, title: target.value });
    };

    const handleAddSplit = () => {
        cron.splits.push(structuredClone(INITIAL_STATE_SPLIT));
        setCron({ ...cron });
    };

    const handleRemoveSplit = (index: number) => {
        cron.splits.splice(index, 1);
        setCron({ ...cron });
    };

    const handleChangeSplit = (
        { target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
    ) => {
        const key = target.name as keyof TCronSplitDOM;
        if (key === 'name') {
            cron.splits[index][key] = target.value;
        } else {
            const key = target.name as keyof TCronTimeDOM;
            cron.splits[index].time[key] = validValueOfTime(key, +target.value);
        }
        setCron({ ...cron });
    };

    const handleCreateCron = async () => {
        await callEndpointApi(cronServices.create(cron));
        handleBack();
    };

    const handleBack = () => {
        handleClosePreview();
        navigate(ROUTES.MAIN);
    };

    const handlePreview = () => {
        setPreviewCronWindow(
            new WebviewWindow('run-cron', {
                url: ROUTES.PREVIEW_CRON,
                width: 400,
                height: 300,
                maxHeight: 600,
                decorations: false,
                focus: true,
                dragDropEnabled: true,
            }),
        );
    };

    const handleClosePreview = () => {
        if (previewCronWindow) previewCronWindow.close();
        setPreviewCronWindow(undefined);
    };

    return {
        cron,
        loading,
        previewCronWindow,
        handleChangeTitle,
        handleAddSplit,
        handleRemoveSplit,
        handleChangeSplit,
        handleCreateCron,
        handleBack,
        handlePreview,
        handleClosePreview,
    };
};
