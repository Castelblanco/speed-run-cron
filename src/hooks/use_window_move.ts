import { getCurrentWindow } from '@tauri-apps/api/window';
import { useEffect } from 'react';

export const useWindowMove = () => {
    let isDragging = false;
    const appWindow = getCurrentWindow();

    const handleMouseDown = () => (isDragging = true);
    const handleMouseUp = () => (isDragging = false);

    const handleMouseMove = async () => {
        if (!isDragging) return;
        await appWindow.startDragging();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return {
        appWindow,
    };
};
