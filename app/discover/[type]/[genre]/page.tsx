import { default as ErrorBox } from "../../../../components/Error";
import TMDB from "../../../../server/tmdb";
import { genRandom, genTitle } from "../../../../utils";
import GenreSuggestions from "../../../[type]/[slug]/Suggestions";

export const metadata = {
    title: genTitle("Discover"),
};

export default async function GetGenresSSR({ params }: any) {
    let { genre, type } = params;
    const ref = type === "tv" ? type : "movie";
    const page = genRandom(8);

    try {
        const { data } = await TMDB.get(
            `/discover/${ref}?with_genres=${genre}&page=${page}`
        );
        if (data?.results?.length <= 0)
            throw new Error(`Unable to fetch ${type}(s) with ID: ${genre}`);
        else
            return (
                <GenreSuggestions
                    // title={`Displaying ${ref} with genre ${genre}`}
                    currentPage={page + 1}
                    type={type}
                    suggestions={data?.results ?? []}
                    genre={genre}
                />
            );
    } catch (err: any) {
        console.log("Error fetching Genres: ", params, "\n :", err);
        return <ErrorBox message={err?.message ?? "Error getting Genres!"} />;
    }
}
