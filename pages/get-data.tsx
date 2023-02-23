import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import MovieCard from "../components/MovieCard";

type Props = { items: any[] | null };

export default function GetData({ items }: Props) {
    const [data, setData] = useState<any[] | null>(items);
    const loading = useRef(false);
    const setLoading = (state: boolean) => (loading.current = state);

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

    if (!items || !data)
        return (
            <div className="bg-red-400 rounded-md p-6 flex flex-col gap-2 items-center ">
                <h1 className="h4">Error Getting Data</h1>
                <Link className="btn-1 mx-auto bg-teal-800 text-white" href="/">
                    Go Home
                </Link>
            </div>
        );

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

export const getServerSideProps = async (page = 1) => {
    let payload: any;
    try {
        const data = await getMore(page);
        payload = data;
    } catch (err: any) {
        console.log("Error fetching,", err);
        payload = null;
    }
    return {
        props: {
            items: payload?.results ?? null,
        },
    };
};

async function getMore(page: number) {
    try {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=14a7e4429fa0d8465645b61e335f68ce`
        ).then((res) => res.json());
        return data;
    } catch (err: any) {
        console.log("Error fetching,", err);
        return null;
    }
}
