import { TCronDOM } from '@models/cron/entities';
import { TDependencies } from '.';

export const buildCreate = ({ repository }: TDependencies) => {
    const service = (cron: TCronDOM) => {
        return repository.create(cron);
    };
    return service;
};
