import { useState } from 'react';

export const useCallServices = () => {
    const [loading, setLoading] = useState(false);

    const callEndpointApi = async <T>(call: Promise<T>) => {
        try {
            setLoading(true);
            return await call;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            throw new Error(e);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        callEndpointApi,
    };
};
