import { ROUTES } from '@constants/router';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PageMainListCrons from './main/list-crons';
import PageMainCreateCron from './main/create-cron';
import PageMainRunCron from './main/run-cron';
import PageMainEditCron from './main/edit-cron';
import PageMainPreviewCron from './main/preview-cron';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.MAIN} element={<PageMainListCrons />} />
                <Route path={ROUTES.CREATE_CRON} element={<PageMainCreateCron />} />
                <Route path={ROUTES.RUN_CRON} element={<PageMainRunCron />} />
                <Route path={ROUTES.EDIT_CRON} element={<PageMainEditCron />} />
                <Route path={ROUTES.PREVIEW_CRON} element={<PageMainPreviewCron />} />
            </Routes>
        </BrowserRouter>
    );
};
