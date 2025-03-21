import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppRoutes } from './pages';
import { useSystemTheme } from '@hooks/use_system_theme';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useAppTheme } from '@storages/zustand/app_theme';
import { useCallback, useEffect } from 'react';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { APP_NAME } from '@constants/app';
import { useAppVersion } from '@storages/zustand/app_version';
import { getVersion } from '@tauri-apps/api/app';

export const App = () => {
    const { appTheme } = useAppTheme();
    const { version, setVersion } = useAppVersion();
    const appWindow = getCurrentWindow();

    useEffect(() => {
        appWindow.setTitle(`${APP_NAME} v${version}`);
    }, [version]);

    useEffect(() => void handleAppVersion(), []);

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

    const handleAppVersion = async () => {
        setVersion(await getVersion());
    };

    return (
        <ThemeProvider theme={theme()}>
            <CssBaseline />
            <AppRoutes />
        </ThemeProvider>
    );
};
