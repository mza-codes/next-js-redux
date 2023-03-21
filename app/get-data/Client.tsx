"use client";

import { useCallback, useRef, useState } from "react";
import MovieCard from "../../components/MovieCard";
import Loader from "../loading";

type Props = {
    items: any[] | null;
    currentPage?: number;
};

export default function DisplayData({ items, currentPage = 2 }: Props) {
    const [data, setData] = useState<any[] | null>(items);
    const [loading, setLoading] = useState(false);
    const page = useRef(currentPage);
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
        <section className="relative flex flex-col gap-3 items-center justify-center">
            <main className="items-center m-2 p-2 flex flex-row gap-2 flex-wrap justify-center">
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
            {loading && <Loader />}
        </section>
    );
}

async function getMore(page: number) {
    try {
        const response = await fetch(
            `/api/v1/get-data?type=movie&cat=popular&page=${page}`
        );
        const data = await response.json();
        return data;
    } catch (err: any) {
        console.log("Error fetching:", page, err);
        return null;
    }
}

// async function getMore(page: number) {
//     try {
//         const { data } = await API.get(
//             `/get-data?type=movie&cat=popular&page=${page}`
//         );
//         return data;
//     } catch (err: any) {
//         console.log("Error fetching,", err);
//         return null;
//     }
// }
