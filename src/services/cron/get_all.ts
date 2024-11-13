import { TDependencies } from '.';

export const buildGetAll = ({ repository }: TDependencies) => {
    const service = () => {
        return repository.getAll();
    };
    return service;
};
