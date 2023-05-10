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
        <section className="flex flex-col gap-2 items-center py-4">
            <img
                className="bg-black py-2 px-4 rounded-lg bg-opacity-60 hover:bg-opacity-50"
                alt="mFlux_logo"
                src="/mFlux_logo.png"
                width={150}
                height={80}
            />

            <article className="text-sm sm:text-xl font-medium text-black ml-3 p-2 max-w-[800px]">
                <b className="text-5xl text-[#fff]">mFlux</b> is built with TMDB API,
                Using <strong className="text-white">Next.JS 13</strong> <br />
                The role of this application is to provide latest movies & tv shows
                information. As every applications first priority is Perfomance, We are
                currently working towards newer features, Built from scratch using minimal
                dependencies & custom made components. This Application uses features like
                Server Side Rendering, Static Site Generation & ISR, Thanks to{" "}
                <strong>
                    <a
                        className="article-link"
                        href="https://nextjs.org/"
                        // https://tailwindcss.com/
                        target="_blank"
                        rel="mflux"
                    >
                        Next.JS
                    </a>
                </strong>{" "}
                team. <br />
                The UI is developed with{" "}
                <strong>
                    <a
                        className="article-link"
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="mflux"
                    >
                        TailwindCSS
                    </a>
                </strong>
                <br />
                Featuring Dynamic Theming using native CSS.
                <br />
                Uses{" "}
                <strong>
                    <a
                        className="article-link"
                        href="https://jotai.org/"
                        target="_blank"
                        rel="mflux"
                    >
                        Jotai
                    </a>
                </strong>{" "}
                &{" "}
                <strong>
                    <a
                        className="article-link"
                        href="https://github.com/pmndrs/zustand"
                        target="_blank"
                        rel="mflux"
                    >
                        Zustand
                    </a>
                </strong>{" "}
                for global state management.
                <br />
                You can still view the{" "}
                <strong>
                    <a
                        className="article-link"
                        href="https://mflux.netlify.app/"
                        target="_blank"
                        rel="mflux"
                    >
                        Old Version
                    </a>
                </strong>{" "}
                <b className="text-sm">(Based on React)</b>
            </article>

            <Link href="/get-data" className="bg-black text-white btn-1">
                Popular Collections
            </Link>
            <Link href="/home" className="bg-black text-white btn-1">
                Home
            </Link>
        </section>
    );
}
