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
    const ERR = items === undefined;
    console.log("ITEMS:", items);;
    if (!items || ERR) <Error />;
    return <DisplayData items={items} currentPage={page} />;
}

async function getInitialData(page: number) {
    try {
        const response = await API.get(
            `/get-data?type=movie&cat=popular&page=${page}`
        );
        const { data } = response;
        console.log("APIRES: ", response, data);
        return data?.results;
    } catch (err: any) {
        console.log(`Error fetching ARRAY: page=${page}: `, err);
        return null;
    }
}
