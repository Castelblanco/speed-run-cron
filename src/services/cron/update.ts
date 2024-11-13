import { TCronDOM } from '@models/cron/entities';
import { TDependencies } from '.';

export const buildUpdate = ({ repository }: TDependencies) => {
    const service = (cron: TCronDOM) => {
        return repository.update(cron);
    };
    return service;
};
