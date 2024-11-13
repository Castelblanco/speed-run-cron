import { TDependencies } from '.';

export const buildDelete = ({ repository }: TDependencies) => {
    const service = (id: string) => {
        return repository.delete(id);
    };
    return service;
};
