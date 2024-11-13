import { TCronDOM } from '../entities';

export type TCronRepository = {
    getAll: () => Promise<TCronDOM[]>;
    create: (cron: TCronDOM) => Promise<TCronDOM>;
    update: (cron: TCronDOM) => Promise<TCronDOM>;
    delete: (id: string) => Promise<void>;
};
