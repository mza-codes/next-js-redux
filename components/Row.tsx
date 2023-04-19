import { Movie } from "../@types";
import { w500 } from "../contstants";

type RowProps = {
    movies: Movie[];
    title: string;
};

export default function Row({ movies, title }: RowProps) {
    return (
        <section className="flex flex-col flex-wrap gap-2 max-w-[98vw] mx-auto">
            <h2 className="text-4xl font-black m-2">{title ?? "Loading.."}</h2>
            <div className="w-full px-6 py-4 overflow-x-scroll overflow-y-hidden flex flex-row gap-3 no-scrollbar">
                {movies?.map((movie) => (
                    <div
                        key={movie?.id}
                        className="img min-w-[200px] max-w-[220px] min-h-[200px] max-h-[300px] transition-transform duration-700 hover:scale-110"
                    >
                        <img
                            className="w-full h-full object-cover aspect-[2/3] rounded-md"
                            src={
                                movie?.poster_path
                                    ? w500 + movie?.poster_path
                                    : movie?.backdrop_path
                                    ? w500 + movie?.backdrop_path
                                    : "/404.jpg"
                            }
                            alt={String(movie?.id)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
