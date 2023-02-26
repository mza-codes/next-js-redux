import { Metadata } from "next";
import Link from "next/link";
import { genTitle, verifyEnv } from "../utils";

export const metadata: Metadata = {
    title: genTitle("Home"),
    authors: { name: "mza-codes", url: "https://mza-codes.github.io/" },
    keywords: ["Next.js", "React", "mflux", "mFlux"],
    description: "mFlux - TMDB Based Open Source Project",
};

export default function Page() {
    verifyEnv();
    return (
        <section className="flex gap-2 items-center flex-col">
            <h1 className="h2">J-Hello World</h1>

            <Link href="/temp" className="bg-red-800 text-white btn-1">
                Navigate to Temp
            </Link>
            <Link href="/get-data" className="bg-orange-800 text-white btn-1">
                Get Data
            </Link>

            <button className="bg-yellow-200 text-black btn-1">Button</button>
        </section>
    );
}
