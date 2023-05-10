"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { DetailedMovie, Movie } from "../../../@types";
import LoadBar from "../../../components/LoadBar";
import PersonBar from "../../../components/PersonsBar";
import { POSTER_URL } from "../../../contstants";
import { useLocalStore } from "../../../store";
import Trailer from "./Trailer";

type Props = {
    movie: DetailedMovie;
    type: "movie" | "tv";
};

export default function ViewSingle({ movie, type }: Props) {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const addMovie = useLocalStore((s) => s.addMovie);
    // const loaded = useRef({ banner: false, poster: false });
    const has = useMemo(
        () => ({
            crew: movie?.credits?.crew?.length ?? 0 >= 1,
            cast: movie?.credits?.cast?.length ?? 0 >= 1,
        }),
        [movie?.credits]
    );

    return (
        <main className="min-h-[100dvh] w-full h-auto">
            <section className="relative">
                {loading && <LoadBar loading={loading} />}
                {/* SSR Image (change to reduce cost) */}
                <Image
                    alt="Movie Banner"
                    src={
                        movie?.backdrop_path
                            ? `${POSTER_URL}${movie?.backdrop_path}`
                            : `https://picsum.photos/1920/1080`
                    }
                    className="w-full h-full object-fill aspect-video shadow-lg"
                    width={1920}
                    height={1080}
                    loading="eager"
                    priority={true}
                    onLoadingComplete={() => setLoading(false)}
                />
                {/* <div className="fade_bottom"></div> */}
            </section>
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
                        <button
                            className="btn-1 text-black text-sm bg-white"
                            type="button"
                            onClick={() => setIsOpen(true)}
                        >
                            Get Trailers
                        </button>

                        {movie?.genres?.map((genre) => (
                            <Link
                                prefetch={false}
                                onClick={() => setLoading(true)}
                                className="genre-button btn-hover "
                                key={genre?.id}
                                href={`/discover/${type}/${genre?.id ?? 28}`}
                            >
                                {genre?.name}
                            </Link>
                        ))}
                    </div>
                </section>
                <section className="m-3 p-2 items-center text-white md:items-end text-left flex flex-col gap-2 md:w-1/2">
                    <div className="relative">
                        <img
                            alt="Poster"
                            src={`${POSTER_URL}${movie?.poster_path}`}
                            width={280}
                            height={400}
                            className="min-w-[200px] add-bg h-full object-contain rounded-md portrait-poster"
                            // onLoad={() => handleComplete("poster")}
                        />
                        <button
                            className="btn-1 absolute -right-2 -top-1 opacity-0 hover:opacity-100 text-rose-600 hover:text-rose-700"
                            type="button"
                            onClick={() => addMovie(movie as Movie)}
                        >
                            <MdFavorite size={24} />
                        </button>
                    </div>
                </section>
            </div>
            {has.cast ? (
                <PersonBar title="Top Cast" arr={movie?.credits?.cast ?? []} />
            ) : (
                <h2 className="h6 text-rose-800 text-center py-2">
                    No Cast Information!
                </h2>
            )}
            {has.crew ? (
                <PersonBar title="Top Crew" arr={movie?.credits?.crew ?? []} />
            ) : (
                <h2 className="h6 text-rose-800 text-center py-2">
                    No Crew Information!
                </h2>
            )}
            <Trailer movie={movie} open={[isOpen, setIsOpen]} />
        </main>
    );
}
