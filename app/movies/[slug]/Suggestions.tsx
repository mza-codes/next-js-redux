"use client";
import { useCallback, useRef, useState } from "react";
import API from "../../../api";
import MovieCard from "../../../components/MovieCard";
import Loader from "../../loading";

type Props = {
    suggestions: any[];
    genre: number | string;
};

export default function GenreSuggestions({ suggestions, genre }: Props) {
    const [data, setData] = useState<any[] | null>(suggestions);
    const [loading, setLoading] = useState(false);
    const page = useRef(2);
    const observer = useRef<any>();

    const lastItem = useCallback((node: any) => {
        if (loading) return; // loading state
        if (observer.current) observer.current?.disconnect();
        observer.current = new IntersectionObserver(
            async (entries) => {
                if (entries[0]?.isIntersecting) {
                    if (true) {
                        setLoading(true);
                        const values = await getMore(genre, page.current);
                        if (!values) return;
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
            <h2 className="h4 font-bold">Similar Suggestions</h2>
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
        </section>
    );
}

async function getMore(genre: string | number, page: number) {
    try {
        const { data } = await API.get(
            `/get-genres?type=movie&genre=${genre}&page=${page}`
        );
        return data;
    } catch (err: any) {
        console.log("Error fetching,", err);
        return null;
    }
}
