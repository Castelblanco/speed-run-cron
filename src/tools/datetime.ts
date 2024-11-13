import { TCronTimeDOM } from '@models/cron/entities';
import { DateTime } from 'luxon';

const createDateTimeFromSplit = (splitTime: TCronTimeDOM) => {
    return DateTime.now().set({
        hour: splitTime.hours,
        minute: splitTime.minutes,
        second: splitTime.seconds,
        millisecond: splitTime.milliseconds,
    });
};

export const substractTimes = (
    currentSplitTime: TCronTimeDOM,
    splitTimeComparate: TCronTimeDOM,
): TCronTimeDOM => {
    const currentTime = createDateTimeFromSplit(currentSplitTime);
    const timeComparate = createDateTimeFromSplit(splitTimeComparate);

    const diff = timeComparate
        .diff(currentTime, ['hours', 'minutes', 'seconds', 'milliseconds'])
        .toObject();

    return {
        hours: Math.abs(diff.hours || 0),
        minutes: Math.abs(diff.minutes || 0),
        seconds: Math.abs(diff.seconds || 0),
        milliseconds: Math.abs(diff.milliseconds || 0),
    };
};

export const comparateTimes = (
    currentSplitTime: TCronTimeDOM,
    splitTimeComparate: TCronTimeDOM,
) => {
    const currentTime = createDateTimeFromSplit(currentSplitTime);
    const timeComparate = createDateTimeFromSplit(splitTimeComparate);
    return currentTime > timeComparate;
};
