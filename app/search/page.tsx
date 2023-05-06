import Link from "next/link";

type Props = {
    searchParams: {
        q: string;
        page: string;
    };
};

export default async function SearchPage({ searchParams }: Props) {
    console.log(searchParams);
    return (
        <>
            <h2 className="text-xl">
                Results for Query: <i className="font-semibold">"{searchParams.q}"</i>
            </h2>
            <div className="py-5 col center">
                <h4 className="text-4xl">Uh'Uh.. This page is under development!</h4>
                <Link className="genre-button" href={"/"}>
                    Home
                </Link>
            </div>
        </>
    );
}
