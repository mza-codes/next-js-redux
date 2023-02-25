import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

if (!process.env.TMDB_API_KEY)
    throw new Error("VARIABLE: `TMDB_API_KEY` is Missing!");

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
