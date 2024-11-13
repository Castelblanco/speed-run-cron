import { PageLoading } from '@templates/page_loading';
import { CronPreview } from 'src/components/organisms/cron/preview';
import { usePageMainPreviewCron } from './hook';

export default function PageMainPreviewCron() {
    const { cron } = usePageMainPreviewCron();

    if (!cron) return <PageLoading />;
    return <CronPreview cron={cron} />;
}
