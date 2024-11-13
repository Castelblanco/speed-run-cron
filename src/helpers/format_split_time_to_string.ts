import { TCronTimeDOM } from '@models/cron/entities';

export const formatSplitTimeToString = (splitTime: TCronTimeDOM) => {
    const validMinutes =
        splitTime.minutes === 0 ? '' : `${String(splitTime.minutes).padStart(2, '0')}:`;
    const validHours =
        splitTime.hours === 0 ? '' : `${String(splitTime.hours).padStart(2, '0')}:`;

    const millisecondTxt = `${splitTime.milliseconds}`.padStart(3, '0');
    return `${validHours}${validMinutes}${String(splitTime.seconds).padStart(2, '0')}.${millisecondTxt[0]}${millisecondTxt[1]}`;
};
