import { Movie } from "../../@types";
import Error from "../../components/Error";
import Row from "../../components/Row";
import { populate } from "../../contstants";
import TMDB from "../../server/tmdb";
import { genTitle } from "../../utils";

export const metadata = {
    title: genTitle("Home"),
};

export default async function HomePage() {
    try {
        const { data } = await TMDB.get(populate.trending);
        return (
            <section className="flex gap-2 items-start py-6 flex-col">
                {[...Array(4)].map((_, i) => (
                    <Row key={i} movies={data?.results as Movie[]} title={`Trending Movies ${new Date().getFullYear()}`} />
                ))}
            </section>
        );
    } catch (err: any) {
        console.log("Error in /home: ", err);
        return <Error message={err?.message ?? "Error Fetching Data!"} />;
    }
}
