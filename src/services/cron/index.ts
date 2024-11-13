import { TCronRepository } from 'src/models/cron/repository';
import { buildGetAll } from './get_all';
import { CronTauriStoreRepository } from '@storages/tauri/repositories/cron';
import { buildCreate } from './create';
import { buildUpdate } from './update';
import { buildDelete } from './delete';

export type TDependencies = {
    repository: TCronRepository;
};

const dependencies: TDependencies = {
    repository: new CronTauriStoreRepository(),
};

const getAll = buildGetAll(dependencies);
const create = buildCreate(dependencies);
const update = buildUpdate(dependencies);
const deleteOne = buildDelete(dependencies);

export const cronServices = {
    getAll,
    create,
    update,
    delete: deleteOne,
};
