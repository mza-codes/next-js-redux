import Error from "../../../../components/Error";
import TMDB from "../../../../server/tmdb";
import GenreSuggestions from "../../../[type]/[slug]/Suggestions";

export default async function GetGenresSSR({ params }: any) {
    console.log("PARAM: ", params);
    let { genre, type } = params;
    type = type === "tv" ? type : "movie";
    try {
        const { data } = await TMDB.get(
            `/discover/${type}?with_genres=${genre}&page=1`
        );
        return (
            <GenreSuggestions
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
