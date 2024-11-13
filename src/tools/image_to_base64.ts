import { fetch } from '@tauri-apps/plugin-http';

export const imageToBase64 = async (url: string): Promise<string> => {
    const res = await (await fetch(url)).blob();
    return new Promise((reso, rej) => {
        const reader = new FileReader();
        reader.readAsDataURL(res);
        reader.onloadend = ({ target }) => {
            reso(`${target?.result}`);
        };
        reader.onerror = rej;
    });
};
