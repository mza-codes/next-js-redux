import { DetailedMovie } from "../../../@types";
import API from "../../../api";
import Error from "../../../components/Error";
import { genTitle } from "../../../utils";
import ViewOneMovie from "./Client";

export const metadata = { title: genTitle("Movie") };

export default async function Page({ params }: any) {
    const movie: DetailedMovie | null = await getMovieData({ params });

    if (!movie) return <Error />;
    return <ViewOneMovie movie={movie} />;
}

async function getMovieData({ params }: any) {
    try {
        const { data } = await API.get(
            `/movie/${params?.slug ?? 14325}?append_to_response=videos,credits`
        );
        return data;
    } catch (err) {
        console.log("Error fetching: ", err);
        return null;
    }
}

/** @param { /movie/${id}?append_to_response=videos,credits&api_key=${API_KEY} } */
