import Image from "next/image";
import Link from "next/link";
import { Movie } from "../@types";
import { w500 } from "../contstants";

type Props = {
    movie: Movie;
    classes?: string;
};

export default function MovieCard({ movie, classes }: Props) {
    return (
        <div
            className={`max-h-screen max-w-xs m-2 flex flex-col overflow-ellipsis p-2 gap-2 items-start border-0 border-black relative ${classes}`}
        >
            <Image
                alt="_loading"
                className={`rounded-md object-cover w-64 shadow-lg hover:shadow-md`}
                src={
                    movie?.poster_path
                        ? w500 + movie?.poster_path
                        : movie?.backdrop_path
                        ? w500 + movie?.backdrop_path
                        : "/vercel.svg"
                }
                width={250}
                height={250}
            />

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
                    {movie?.overview} &nbsp;
                    <Link
                        href="/"
                        className="text-black hover:text-rose-700"
                    >
                        View
                    </Link>
                </p>
            </div>
        </div>
    );
}
