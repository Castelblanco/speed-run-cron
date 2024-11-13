export type TCronDOM = {
    id: string;
    title: string;
    time: TCronTimeDOM;
    splits: TCronSplitDOM[];
};

export class CronDOM implements TCronDOM {
    id: string;
    title: string;
    time: TCronTimeDOM;
    splits: TCronSplitDOM[];

    constructor(cron: TCronDOM) {
        this.id = cron.id;
        this.title = cron.title;
        this.time = cron.time;
        this.splits = cron.splits;
    }
}

export type TCronTimeDOM = {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};

export class CronTimeDOM implements TCronTimeDOM {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;

    constructor(time: TCronTimeDOM) {
        this.hours = time.hours;
        this.minutes = time.minutes;
        this.seconds = time.seconds;
        this.milliseconds = time.milliseconds;
    }
}

export type TCronSplitDOM = {
    name: string;
    time: TCronTimeDOM;
};

export class CronSplitDOM implements TCronSplitDOM {
    name: string;
    time: TCronTimeDOM;

    constructor(split: TCronSplitDOM) {
        this.name = split.name;
        this.time = split.time;
    }
}
