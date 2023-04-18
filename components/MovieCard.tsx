"use client";

import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent } from "react";
import { Movie } from "../@types";
import { w500 } from "../contstants";
import { useLocalStore } from "../store";

type Props = {
    movie: Movie;
    classes?: string;
};

export default function MovieCard({ movie, classes }: Props) {
    const addFavourite = useLocalStore((s) => s.addMovie);
    const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        // e.currentTarget.classList.add("img-pacleholder");
        e.currentTarget.src = "/404.jpg";
        e.currentTarget.classList.remove(`load-pacleholder`);
    };

    return (
        <div
            className={`max-h-screen max-w-xs m-2 min-w-[200px] sm:min-w-[280px] flex flex-col overflow-ellipsis p-2 gap-2 items-start border-0 border-black relative ${classes}`}
        >
            <img
                alt="Movie_Poster"
                className={`load-pacleholder min-h-[400px] rounded-md object-cover min-w-[280px] shadow-lg hover:shadow-md`}
                src={
                    movie?.poster_path
                        ? w500 + movie?.poster_path
                        : movie?.backdrop_path
                        ? w500 + movie?.backdrop_path
                        : "/404.jpg"
                }
                width={400}
                height={280}
                onLoad={(el) => el.currentTarget.classList.remove(`load-pacleholder`)}
                onError={handleError}
            />

            <div className="text-white text-left">
                <h1 className="h4 drop-shadow-lg">
                    {movie?.title || movie?.original_title || movie?.original_name || movie?.name}
                </h1>
                <h1 className="h6 drop-shadow-lg">{movie?.release_date || movie?.first_air_date}</h1>
                <p className="text-sm overview drop-shadow-lg">
                    {movie?.overview?.length! >= 380
                        ? movie?.overview?.substring(0, 380) + "..."
                        : movie?.overview}{" "}
                    &nbsp;
                    <Link
                        prefetch={false}
                        href={`/${movie?.type ?? "movie"}/${movie?.id}`}
                        className="text-black hover:text-rose-700 font-semibold"
                    >
                        View
                    </Link>
                </p>
            </div>
        </div>
    );
}

/** 
 * <Image
                alt="Movie_Poster"
                className={`load-pacleholder min-h-[400px] rounded-md object-cover min-w-[280px] shadow-lg hover:shadow-md`}
                src={
                    movie?.poster_path
                        ? w500 + movie?.poster_path
                        : movie?.backdrop_path
                        ? w500 + movie?.backdrop_path
                        : "/404.jpg"
                }
                width={400}
                height={280}
                onLoadingComplete={(current) => current.classList.remove("load-pacleholder")}
                onError={handleError}
                priority={true}
            />
 */
