import { LazyStore } from '@tauri-apps/plugin-store';
import { createId } from '@tools/create_id';
import { TCronDOM } from 'src/models/cron/entities';
import { TCronRepository } from 'src/models/cron/repository';

const KEY = 'ALL';

export class CronTauriStoreRepository implements TCronRepository {
    store: LazyStore;

    constructor() {
        this.store = new LazyStore('crons.json');
    }

    getAll = async (): Promise<TCronDOM[]> => {
        return (await this.store.get(KEY)) || [];
    };

    create = async (cron: TCronDOM): Promise<TCronDOM> => {
        const crons = await this.getAll();
        cron.id = createId();
        crons.push(cron);
        await this.store.set(KEY, crons);
        await this.store.save();
        return cron;
    };

    update = async (cron: TCronDOM): Promise<TCronDOM> => {
        const crons = await this.getAll();
        const index = crons.findIndex(({ id }) => id === cron.id);
        if (index === -1) return cron;
        crons[index] = cron;
        await this.store.set(KEY, crons);
        await this.store.save();
        return cron;
    };

    delete = async (id: string): Promise<void> => {
        const crons = await this.getAll();
        const index = crons.findIndex((cron) => id === cron.id);
        crons.splice(index, 1);
        await this.store.set(KEY, crons);
        await this.store.save();
    };
}
