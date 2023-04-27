"use client";
import { useCallback, useRef, useState } from "react";
import API from "../../../api";
import MovieCard from "../../../components/MovieCard";
import Loader from "../../loading";

type Props = {
    suggestions: any[];
    genre: number | string;
    type: "movie" | "tv";
    currentPage?: number;
    title?: string;
};

export default function GenreSuggestions({
    suggestions,
    title = "Similar Suggestions",
    genre,
    type,
    currentPage = 2,
}: Props) {
    const [data, setData] = useState<any[] | null>(suggestions);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const page = useRef(currentPage);
    const observer = useRef<any>();

    const lastItem = useCallback((node: any) => {
        if (loading) return; // loading state
        if (observer.current) observer.current?.disconnect();
        observer.current = new IntersectionObserver(
            async (entries) => {
                if (entries[0]?.isIntersecting) {
                    if (!loading) {
                        setLoading(true);
                        const values = await getMore({
                            genre,
                            page: page.current,
                            type,
                        });
                        if (!values) {
                            setFinished(true);
                            return;
                        }
                        setData((c: any) => [...c, ...values?.results]);
                        page.current++;
                        setLoading(false);
                        return true;
                    } else return false;
                }
            },
            { rootMargin: "400px" }
        );
        if (node) return observer.current.observe(node);
    }, []);
    return (
        <section className="col center pb-12">
            <h2 className="h4 font-bold text-center mb-2 mt-4">{title}</h2>
            <div className="row center">
                {data?.map((movie, i) => {
                    if (data.length === i + 1) {
                        return (
                            <div key={movie?.id} ref={lastItem}>
                                <MovieCard movie={movie} />
                            </div>
                        );
                    } else return <MovieCard key={movie?.id} movie={movie} />;
                })}
            </div>
            {loading && <Loader />}
            {finished && <h2 className="h4 font-black">End of Section!</h2>}
        </section>
    );
}
type params = {
    genre: string | number;
    page: number;
    type: "movie" | "tv";
};

async function getMore({ genre, type, page }: params) {
    try {
        const { data } = await API.get(
            `/get-genres?type=${type}&genre=${genre}&page=${page}`
        );
        return data;
    } catch (err: any) {
        console.log("Error fetching,", err);
        return null;
    }
}
