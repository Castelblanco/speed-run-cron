import { useWindowMove } from '@hooks/use_window_move';
import { TCronDOM } from '@models/cron/entities';
import { LogicalSize } from '@tauri-apps/api/dpi';
import { emit, Event, listen } from '@tauri-apps/api/event';
import { useEffect, useState } from 'react';

export const usePageMainPreviewCron = () => {
    const [cron, setCron] = useState<TCronDOM>();

    const { appWindow } = useWindowMove();

    useEffect(() => {
        emit('request-preview-cron');
        const unlisten = listen('send-preview-cron', ({ payload }: Event<TCronDOM>) => {
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

    const resizeWindow = async (cron: TCronDOM) => {
        const { width } = await appWindow.innerSize();
        const splitsSize = cron.splits.length <= 10 ? cron.splits.length : 10;
        await appWindow.setSize(new LogicalSize(width, splitsSize * 40 + 140));
    };

    return {
        cron,
    };
};
