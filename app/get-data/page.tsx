import API from "../../api";
import Error from "../../components/Error";
import { genTitle } from "../../utils";
import DisplayData from "./Client";

export const metadata = {
    title: genTitle("Popular Movies"),
};

export default async function GetData() {
    const page = Math.floor(Math.random() * 24) + 1;
    const items: any[] = await getInitialData(page);
    if (!items) <Error />;
    return <DisplayData items={items} currentPage={page} />;
}

async function getInitialData(page: number) {
    try {
        const { data } = await API.get(`/movie/popular?page=${page}`);
        return data?.results;
    } catch (err: any) {
        console.log(`Error fetching ARRAY: page=${page}: `, err);
        return null;
    }
}
