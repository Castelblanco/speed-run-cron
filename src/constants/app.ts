import { getVersion } from '@tauri-apps/api/app';

export const APP_VERSION = await getVersion();
