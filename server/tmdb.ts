import axios, { AxiosPromise } from "axios";

const TMDB = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    timeout: 30000,
    params: {
        api_key: process.env.TMDB_API_KEY!,
    },
});

export const fetchData = async (request: AxiosPromise) => {
    try {
        const { data } = await request;
        return [null, data];
    } catch (e: any) {
        console.log("Error Fetching", e);
        return [e, null];
    }
};

export default TMDB;

export const tmdb = {
    getBaseURL: () => `https://api.themoviedb.org/3` as const,
    getApiKey: () => `api_key=${process.env.TMDB_API_KEY!}` as const,
};

// declared `as const` to get the exact return value
