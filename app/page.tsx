import { Metadata } from "next";
import Image from "next/image";
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
            <Image
                className="bg-black py-2 px-4 rounded-lg bg-opacity-60 hover:bg-opacity-50"
                alt="mFlux_logo"
                src="/mFlux_logo.png"
                width={150}
                height={80}
            />

            <Link href="/temp" className="bg-red-800 text-white btn-1">
                Test Route
            </Link>
            <Link href="/get-data" className="bg-orange-800 text-white btn-1">
                Get Data
            </Link>

            <button className="bg-yellow-200 text-black btn-1">Button</button>
        </section>
    );
}
