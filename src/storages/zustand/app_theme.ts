import { LazyStore } from '@tauri-apps/plugin-store';
import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

type TAppThemeStore = {
    appTheme: 'dark' | 'light';
    setAppTheme: (appTheme: 'dark' | 'light') => void;
};

const store = new LazyStore('app_theme.json');
const storage: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        return (await store.get(name)) || null;
    },
    setItem: async (name: string, value: string): Promise<unknown> => {
        await store.set(name, value);
        return value;
    },
    removeItem: async (name: string): Promise<unknown> => {
        return await store.delete(name);
    },
};

export const useAppTheme = create(
    persist<TAppThemeStore>(
        (set) => ({
            appTheme: 'light',
            setAppTheme: (appTheme) => set({ appTheme }),
        }),
        {
            name: 'app-theme',
            storage: createJSONStorage(() => storage),
        },
    ),
);
