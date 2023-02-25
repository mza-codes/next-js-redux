import Error from "../../components/Error";
import TMDB from "../../server/tmdb";
import { genTitle } from "../../utils";
import DisplayData from "./Client";

export const metadata = {
    title: genTitle("Popular Movies"),
};

export default async function GetData() {
    const page = Math.floor(Math.random() * 24) + 1;
    const items: any[] = await getInitialData(page);

    /** @param { PREVENT FAILURE } */
    const ERR = items === undefined || items === null;
    if (!items || ERR) <Error />;

    return <DisplayData items={items} currentPage={page} />;
}

async function getInitialData(page: number) {
    try {
        const response = await TMDB.get(`/movie/popular?page=${page}`);
        const { data } = response;
        console.log("API_RES: ", response, "\n", data);
        return data?.results;
    } catch (err: any) {
        console.log(`Error fetching ARRAY: page=${page}: `, err);
        return null;
    }
}
