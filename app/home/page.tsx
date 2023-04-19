import { Movie } from "../../@types";
import Row from "../../components/Row";
import { trending } from "../../contstants";
import TMDB from "../../server/tmdb";
import { genTitle } from "../../utils";

export const metadata = {
    title: genTitle("Home"),
};

export default async function HomePage() {
    const { data } = await TMDB.get(trending);
    return (
        <section className="flex gap-2 items-start py-6 flex-col">
            {[...Array(4)].map((_, i) => (
                <Row key={i} movies={data?.results as Movie[]} title="Trending Movies" />
            ))}
        </section>
    );
}
