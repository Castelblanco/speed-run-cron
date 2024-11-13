import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppRoutes } from './pages';
import { useSystemTheme } from '@hooks/use_system_theme';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useAppTheme } from '@storages/zustand/app_theme';
import { useCallback } from 'react';

export const App = () => {
    const { appTheme } = useAppTheme();

    const theme = useCallback(
        () =>
            createTheme({
                palette: {
                    mode: appTheme,
                },
            }),
        [appTheme],
    );
    useSystemTheme();
    return (
        <ThemeProvider theme={theme()}>
            <CssBaseline />
            <AppRoutes />
        </ThemeProvider>
    );
};
