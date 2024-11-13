import { TCronTimeDOM } from '@models/cron/entities';
import { roundNumber } from './round_number';

const keysTimeLimit: Record<keyof TCronTimeDOM, number> = {
    hours: Infinity,
    minutes: 59,
    seconds: 59,
    milliseconds: 99,
};

export const validValueOfTime = (key: keyof TCronTimeDOM, value: number) => {
    return value > keysTimeLimit[key]
        ? roundNumber(keysTimeLimit[key])
        : roundNumber(value);
};
