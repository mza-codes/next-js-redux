import { Metadata } from "next";
import Link from "next/link";
import { genTitle, verifyEnv } from "../utils";

export const metadata: Metadata = {
    title: genTitle("About"),
    authors: { name: "mza-codes", url: "https://mza-codes.github.io/" },
    keywords: ["Next.js", "React", "mflux", "mFlux"],
    description: "mFlux - TMDB Based Open Source Project",
};

export default function Page() {
    verifyEnv();
    return (
        <section className="flex gap-2 items-center flex-col">
            <img
                className="bg-black py-2 px-4 rounded-lg bg-opacity-60 hover:bg-opacity-50"
                alt="mFlux_logo"
                src="/mFlux_logo.png"
                width={150}
                height={80}
            />

            <article className="text-xl font-medium text-black ml-3 p-2 max-w-[800px]">
                <b className="text-5xl text-[#fff]">mFlux</b> is built with TMDB API, Using{" "}
                <strong className="text-white">Next.JS 13</strong> <br />
                The role of this application is to provide latest movies & tv shows information. As every
                applications first priority is Perfomance, We are currently working towards new features. This
                Application uses Server Side Rendering & Image Optimizations, Thanks to{" "}
                <b className="text-lg text-white">Next.JS</b> team. <br />
                The UI is integrated with the power of <b>TailwindCSS.</b>
                <br />
                Meanwhile you can view the{" "}
                <strong>
                    <a
                        className="text-white hover:text-opacity-50"
                        href="https://mflux.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Old Version
                    </a>
                </strong>{" "}
                <b className="text-sm">(Based on React)</b>
            </article>

            <Link href="/get-data" className="bg-black text-white btn-1">
                Browse Collections
            </Link>
            <Link href="/home" className="bg-white text-black btn-1">
                Home
            </Link>
        </section>
    );
}
