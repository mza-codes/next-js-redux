"use client";

import { useCallback, useRef, useState } from "react";
import API from "../../api";
import MovieCard from "../../components/MovieCard";

type Props = { items: any[] | null };

export default function DisplayData({ items }: Props) {
    const [data, setData] = useState<any[] | null>(items);
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
                        const values = await getMore(page.current);
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
        <main className="bg-green-4000 items-center m-2 p-2 flex flex-row gap-2 flex-wrap justify-center">
            {data?.map((movie, i) => {
                if (data?.length === i + 1) {
                    return (
                        <div key={movie?.id} ref={lastItem}>
                            <MovieCard movie={movie} />
                        </div>
                    );
                } else return <MovieCard movie={movie} key={movie?.id} />;
            })}
        </main>
    );
}

async function getMore(page: number) {
    try {
        const { data } = await API.get(`/movie/popular?page=${page}`);
        return data;
    } catch (err: any) {
        console.log("Error fetching,", err);
        return null;
    }
}
