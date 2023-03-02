import Error from "../../../../components/Error";
import TMDB from "../../../../server/tmdb";
import { genRandom } from "../../../../utils";
import GenreSuggestions from "../../../[type]/[slug]/Suggestions";

export default async function GetGenresSSR({ params }: any) {
    let { genre, type } = params;
    type = type === "tv" ? type : "movie";
    const page = genRandom(8);

    try {
        const { data } = await TMDB.get(
            `/discover/${type}?with_genres=${genre}&page=${page}`
        );
        if (data?.results?.length <= 0)
            return (
                <Error message={`Unable to fetch Genres with ID ${genre}`} />
            );
        else
            return (
                <GenreSuggestions
                    currentPage={page + 1}
                    type={type}
                    suggestions={data?.results ?? []}
                    genre={genre}
                />
            );
    } catch (err: any) {
        console.log("Error fetching Genres: ", params, "\n :", err);
        return <Error message="Error getting Genres!" />;
    }
}
