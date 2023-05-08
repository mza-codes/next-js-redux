import Error from "../../components/Error";
import { tmdb } from "../../server/tmdb";
import { genTitle } from "../../utils";
import DisplayData from "./Client";

export const metadata = {
    title: genTitle("Popular Movies"),
};

export default async function GetData() {
    const page = Math.floor(Math.random() * 24) + 1;
    const rev = 60 * 60;

    try {
        const data = await fetch(
            `${tmdb.getBaseURL()}/movie/popular?page=${page}&${tmdb.getApiKey()}`,
            {
                next: {
                    tags: ["popular"],
                    revalidate: rev * 24,
                },
            }
        ).then((res) => res.json());

        return <DisplayData items={data?.results} currentPage={page + 1} />;
    } catch (err: any) {
        console.log(`Error fetching ARRAY: page=${page}: `, err);
        return <Error message={err?.message} />;
    }
}
