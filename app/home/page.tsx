import { Movie } from "../../@types";
import Error from "../../components/Error";
import MovieCard from "../../components/MovieCard";
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
            <section className="px-1 py-4">
                {[...Array(6)].map((_, i) => (
                    <Row key={i} movies={data?.results} title="Trending" />
                ))}
            </section>
        );
    } catch (err: any) {
        console.log("Error in /home: ", err);
        return <Error message={err?.message ?? "Error Fetching Data!"} />;
    }
}
