import { FormCron } from '@templates/forms/cron';
import { usePageMainCreateCron } from './hook';

export default function PageMainCreateCron() {
    const {
        cron,
        loading,
        previewCronWindow,
        handleChangeTitle,
        handleAddSplit,
        handleRemoveSplit,
        handleChangeSplit,
        handleCreateCron,
        handleBack,
        handlePreview,
        handleClosePreview,
    } = usePageMainCreateCron();

    return (
        <FormCron
            cron={cron}
            loading={loading}
            openPreview={previewCronWindow !== undefined}
            onAddSplit={handleAddSplit}
            onBack={handleBack}
            onChangeSplit={handleChangeSplit}
            onChangeTitle={handleChangeTitle}
            onPreview={handlePreview}
            onRemoveSplit={handleRemoveSplit}
            onSave={handleCreateCron}
            onClosePreview={handleClosePreview}
        />
    );
}
