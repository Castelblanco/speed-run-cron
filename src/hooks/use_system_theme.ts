import { useAppTheme } from '@storages/zustand/app_theme';
import { useEffect } from 'react';

export const useSystemTheme = () => {
    const { setAppTheme } = useAppTheme();
    useEffect(() => {
        const match = matchMedia('(prefers-color-scheme: dark)');
        setAppTheme(match.matches ? 'dark' : 'light');
        match.addEventListener('change', ({ matches }) => {
            setAppTheme(matches ? 'dark' : 'light');
        });
    }, []);
};
