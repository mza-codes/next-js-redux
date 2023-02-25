"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { DetailedMovie } from "../../../@types";
import ScreenLoader from "../../../components/ScreenLoader";
import { POSTER_URL } from "../../../contstants";

type Props = {
    movie: DetailedMovie;
};

export default function ViewSingle({ movie }: Props) {
    const [loading, setLoading] = useState(true);
    const loaded = useRef({ banner: false, poster: false });

    function handleComplete(item: "banner" | "poster") {
        loaded.current[item] = true;
        // const { banner, poster } = loaded.current;
        // if (banner) {
        //     setLoading(false);
        // }
    }

    return (
        <main className="min-h-screen w-full h-auto">
            {loading && <ScreenLoader />}
            <Image
                alt="Movie Banner"
                src={`${POSTER_URL}${movie?.backdrop_path}`}
                className="w-full h-full object-fill aspect-video shadow-lg"
                width={1920}
                height={1080}
                loading="eager"
                priority={true}
                onLoadingComplete={() => setLoading(false)}
            />
            <div className="flex z-40 flex-col md:flex-row justify-between">
                <section className="m-3 p-2 text-white text-left flex flex-col max-w-[90vw] gap-2">
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
                    </p>

                    <div className="flex flex-row flex-wrap items-center gap-2">
                        <button className="btn-1 text-black text-sm bg-white">
                            Add to WatchList
                        </button>
                    </div>
                </section>
                <section className="m-3 p-2 items-center text-white md:items-end text-left flex flex-col gap-2 md:w-1/2">
                    <Image
                        alt="Poster"
                        src={`${POSTER_URL}${movie?.poster_path}`}
                        width={280}
                        height={400}
                        className="min-w-max add-bg h-full object-contain rounded-md portrait-poster"
                        // loading="eager"
                        // priority={true}
                        onLoadingComplete={() => handleComplete("poster")}
                    />
                </section>
            </div>
        </main>
    );
}
