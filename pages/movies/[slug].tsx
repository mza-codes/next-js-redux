import Image from "next/image";
import { DetailedMovie } from "../../@types";
import API from "../../api";
import Error from "../../components/Error";
import { POSTER_URL } from "../../contstants";

type Props = {
    movie: DetailedMovie | null;
};

export default function ViewMovie({ movie }: Props) {
    console.log("SLUG: ", movie);

    if (!movie) return <Error />;

    return (
        <main className="min-h-screen w-full h-auto ">
            <Image
                alt="Movie Banner"
                src={`${POSTER_URL}${movie?.backdrop_path}`}
                className="w-full h-full object-fill aspect-video shadow-lg"
                width={1920}
                height={1080}
                priority={true}
            />
            <div className="flex flex-col md:flex-row justify-between">
                <section className="m-3 p-2 text-white text-left flex flex-col max-w-[90vw] gap-2 md:w-1/2">
                    <h1 className="h3 drop-shadow-lg">
                        {movie?.title ||
                            movie?.original_title ||
                            movie?.original_name ||
                            movie?.name}
                    </h1>
                    <h1 className="h4 drop-shadow-lg">
                        {movie?.release_date || movie?.first_air_date}
                    </h1>
                    <p className="text-base overview drop-shadow-lg">
                        {movie?.overview} &nbsp;
                        <button
                            onClick={() => `/movies/${movie?.id}`}
                            className="text-black hover:text-rose-700"
                        >
                            View
                        </button>
                    </p>
                </section>
                <section className="m-3 p-2 text-white text-left flex flex-col gap-2 md:w-1/2">
                    <Image
                        alt="Poster"
                        src={`${POSTER_URL}${movie?.poster_path}`}
                        width={280}
                        height={600}
                        className="w-full h-full object-contain rounded-lg portrait-poster"
                        priority={true}
                    />
                </section>
            </div>
        </main>
    );
}

export async function getServerSideProps({ params, res }: any) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );

    let payload: any;
    try {
        const { data } = await API.get(
            `/movie/${params?.slug ?? 14325}?append_to_response=videos,credits`
        );
        payload = data;
    } catch (err) {
        console.log("Error fetching: ", err);
        payload = null;
    }

    return {
        props: {
            movie: payload,
        },
    };
}

/** @param { /movie/${id}?append_to_response=videos,credits&api_key=${API_KEY} } */
