import Error from "../../components/Error";
import TMDB from "../../server/tmdb";
import { genTitle } from "../../utils";
import DisplayData from "./Client";

export const metadata = {
    title: genTitle("Popular Movies"),
};

export default async function GetData() {
    const page = Math.floor(Math.random() * 24) + 1;
    try {
        const { data } = await TMDB.get(`/movie/popular?page=${page}`);
        return <DisplayData items={data?.results} currentPage={page} />;
    } catch (err: any) {
        console.log(`Error fetching ARRAY: page=${page}: `, err);
        return <Error message={err?.message} />;
    }
}
