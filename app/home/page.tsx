import { Movie } from "../../@types";
import Error from "../../components/Error";
import Row from "../../components/Row";
import { populate, w500 } from "../../contstants";
import TMDB from "../../server/tmdb";
import { genTitle } from "../../utils";

export const metadata = {
    title: genTitle("Home"),
};

export default async function HomePage() {
    try {
        const { data } = await TMDB.get(populate.trending);
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {data?.results?.map((movie: Movie) => (
                    <div
                        key={movie?.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={
                                movie?.poster_path
                                    ? w500 + movie?.poster_path
                                    : movie?.backdrop_path
                                    ? w500 + movie?.backdrop_path
                                    : "/404.jpg"
                            }
                            alt={movie?.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-medium mb-2">{movie?.title}</h2>
                            <p className="text-gray-600">{movie?.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    } catch (err: any) {
        console.log("Error in /home: ", err);
        return <Error message={err?.message ?? "Error Fetching Data!"} />;
    }
}
