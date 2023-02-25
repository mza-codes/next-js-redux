import API from "../../api";
import Error from "../../components/Error";
import DisplayData from "./Client";

export default async function GetData() {
    const items: any[] = await getInitialData();
    if (!items) <Error />;
    return <DisplayData items={items} />;
}

async function getInitialData(page = 1) {
    let payload: any;
    try {
        const { data } = await API.get(`/movie/popular?page=${page}`);
        payload = data;
    } catch (err: any) {
        console.log("Error fetching,", err);
        payload = null;
    }
    return payload?.results ?? null;
}
