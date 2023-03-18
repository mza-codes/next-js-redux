import { AxiosPromise } from "axios";
import { Crew, DetailedMovie, Person } from "../../../@types";
import Error from "../../../components/Error";
import TMDB from "../../../server/tmdb";
import { genRandom, genTitle } from "../../../utils";
import GenreSuggestions from "./Suggestions";
import ViewSingle from "./ViewSingle";

export const metadata = { title: genTitle("Info") };

export default async function Page({ params }: any) {
    let { slug, type } = params;
    type = type === "tv" ? type : "movie";

    const movie: DetailedMovie | null = await getData(
        TMDB.get(
            `/${type ?? "movie"}/${
                slug ?? 14325
            }?append_to_response=videos,credits`
        ),
        params?.slug
    );
    if (!movie) return <Error />;

    // @ts-ignore
    movie.credits.cast = await filterArray(movie?.credits?.cast ?? []);
    // @ts-ignore
    movie.credits.crew = await filterArray(movie?.credits?.crew ?? []);

    const genre = movie?.genres?.[0]?.id ?? 35;
    const page = genRandom(4);

    const suggestions: any = await getData(
        TMDB.get(`/discover/${type}?with_genres=${genre}&page=1`),
        genre
    );

    return (
        <>
            <ViewSingle movie={movie} type={type} />
            {!suggestions ? (
                <Error message="Unable to Fetch Suggestions!" />
            ) : (
                <GenreSuggestions
                    currentPage={page + 1}
                    type={type}
                    suggestions={suggestions?.results ?? []}
                    genre={genre}
                />
            )}
        </>
    );
}

type mix = Crew[] | Person[];
async function filterArray(arr: mix) {
    return new Promise<mix | []>((resolve, reject) => {
        let queue: any[] = [];
        for (let i = 0; i <= arr.length; i++) {
            const current = arr[i];
            queue.push(current);
            if (queue.includes(current)) {
                queue = queue.filter((v) => v?.id !== current?.id);
                queue.push(current);
            }
        }
        resolve(queue);
    });
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
