import { create } from 'zustand';

type TAppVersionStore = {
    version: string;
    setVersion: (version: string) => void;
};

export const useAppVersion = create<TAppVersionStore>((set) => ({
    version: '',
    setVersion(version) {
        set({ version });
    },
}));
