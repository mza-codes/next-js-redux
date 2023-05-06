"use client";

import Link from "next/link";
import { SyntheticEvent } from "react";
import { MdFavorite, MdOpenInNew } from "react-icons/md";
import { Movie } from "../@types";
import { w500 } from "../contstants";
import { useLocalStore } from "../store";
import { ImgWithSkeleton } from "./LazyImage";

type Props = {
    movie: Movie;
    classes?: string;
};

export default function MovieCard({ movie, classes }: Props) {
    const addToFavourite = useLocalStore((s) => s.addMovie);
    const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        // e.currentTarget.classList.add("img-pacleholder");
        e.currentTarget.src = "/404.jpg";
        e.currentTarget.classList.remove(`load-pacleholder`);
    };

    return (
        <div
            className={`max-h-screen max-w-xs m-2 min-w-[180px] sm:min-w-[280px] flex flex-col overflow-ellipsis p-1 gap-2 items-start relative ${classes}`}
        >
            <ImgWithSkeleton
                alt="Movie_Poster"
                className={`min-h-[400px] rounded-md object-cover min-w-[inherit] shadow-lg hover:shadow-md`}
                src={
                    movie?.poster_path
                        ? w500 + movie?.poster_path
                        : movie?.backdrop_path
                        ? w500 + movie?.backdrop_path
                        : "/404.jpg"
                }
                width={400}
                height={280}
                // onLoad={(el) => el.currentTarget.classList.remove(`load-pacleholder`)}
                onError={handleError}
            />

            <button
                onClick={() => {
                    addToFavourite(movie);
                }}
                className="absolute right-2 top-2 text-rose-700 hover:text-rose-600 opacity-0 hover:opacity-100"
            >
                <MdFavorite size={22} color="red" />
            </button>

            <div className="text-white text-left">
                <h1 className="h4 drop-shadow-lg">
                    {movie?.title ||
                        movie?.original_title ||
                        movie?.original_name ||
                        movie?.name}
                </h1>
                <h1 className="h6 drop-shadow-lg">
                    {movie?.release_date || movie?.first_air_date}
                </h1>
                <p className="text-sm overview drop-shadow-lg">
                    {movie?.overview?.length! >= 380
                        ? movie?.overview?.substring(0, 380) + "..."
                        : movie?.overview}{" "}
                    &nbsp;
                    <Link
                        prefetch={false}
                        href={`/${movie?.type ?? "movie"}/${movie?.id}`}
                        className="text-white hover:text-black absolute shadow-lg"
                    >
                        <MdOpenInNew size={20} />
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
