"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { DetailedMovie } from "../../../@types";
import LoadBar from "../../../components/LoadBar";
import PersonBar from "../../../components/PersonsBar";
import { POSTER_URL } from "../../../contstants";
import Trailer from "./Trailer";

type Props = {
    movie: DetailedMovie;
    type: "movie" | "tv";
};

export default function ViewSingle({ movie, type }: Props) {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const loaded = useRef({ banner: false, poster: false });

    function getGenres() {
        setLoading(true);
        // router.push(`/discover/${type}/${id ?? 28}`);
        return;
    }

    function handleComplete(item: "banner" | "poster") {
        loaded.current[item] = true;
        //  const { banner, poster } = loaded.current;
        //  if (banner) {
        //      setLoading(false);
        // }
    }

    return (
        <main className="min-h-screen w-full h-auto">
            <section className="relative">
                {loading && <LoadBar loading={loading} />}
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
                                onClick={getGenres}
                                className="btn-2 text-sm"
                                key={genre?.id}
                                href={`/discover/${type}/${genre?.id ?? 28}`}
                            >
                                {genre?.name}
                            </Link>
                        ))}
                    </div>
                </section>
                <section className="m-3 p-2 items-center text-white md:items-end text-left flex flex-col gap-2 md:w-1/2">
                    <Image
                        alt="Poster"
                        src={`${POSTER_URL}${movie?.poster_path}`}
                        width={280}
                        height={400}
                        className="min-w-max add-bg h-full object-contain rounded-md portrait-poster"
                        onLoadingComplete={() => handleComplete("poster")}
                    />
                </section>
            </div>
            <Trailer movie={movie} open={[isOpen, setIsOpen]} />
            <PersonBar cast={movie?.credits?.cast?.slice(0, 30) ?? []} />
        </main>
    );
}
