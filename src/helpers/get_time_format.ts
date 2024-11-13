import { TCronTimeDOM } from '@models/cron/entities';

export const getTimeFormat = (time: number): TCronTimeDOM => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / 3600000) % 60);

    return {
        milliseconds,
        seconds,
        minutes,
        hours,
    };
};
