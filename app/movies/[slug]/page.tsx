import { AxiosPromise } from "axios";
import { DetailedMovie } from "../../../@types";
import Error from "../../../components/Error";
import TMDB from "../../../server/tmdb";
import { genTitle } from "../../../utils";
import ViewOneMovie from "./Client";
import GenreSuggestions from "./Suggestions";

export const metadata = { title: genTitle("Movie") };

export default async function Page({ params }: any) {
    const movie: DetailedMovie | null = await getData(
        TMDB.get(
            `/movie/${params?.slug ?? 14325}?append_to_response=videos,credits`
        ),
        params?.slug
    );
    if (!movie) return <Error />;
    const genre = movie?.genres?.[0]?.id ?? 35;

    const suggestions: any = await getData(
        TMDB.get(
            `/discover/movie?with_genres=${genre}&page=1`
        ),
        genre
    );

    return (
        <>
            <ViewOneMovie movie={movie} />
            {!suggestions ? (
                <Error message="Unable to Fetch Suggestions!" />
            ) : (
                <GenreSuggestions suggestions={suggestions?.results ?? []} genre={genre} />
            )}
        </>
    );
}

async function getData(request: AxiosPromise, slug: string | number) {
    try {
        const { data } = await request;
        return data;
    } catch (err) {
        console.log("Error fetching SLUG/GENRE: ", slug, ":", err);
        return null;
    }
}

/** @param { /movie/${id}?append_to_response=videos,credits&api_key=${API_KEY} } */
