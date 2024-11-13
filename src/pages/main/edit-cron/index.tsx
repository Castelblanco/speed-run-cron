import { FormCron } from '@templates/forms/cron';
import { usePageMainEditCron } from './hook';

export default function PageMainEditCron() {
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
    } = usePageMainEditCron();

    return (
        <FormCron
            cron={cron}
            loading={loading}
            openPreview={previewCronWindow !== undefined}
            onClosePreview={handleClosePreview}
            onAddSplit={handleAddSplit}
            onBack={handleBack}
            onChangeSplit={handleChangeSplit}
            onChangeTitle={handleChangeTitle}
            onPreview={handlePreview}
            onRemoveSplit={handleRemoveSplit}
            onSave={handleCreateCron}
        />
    );
}
