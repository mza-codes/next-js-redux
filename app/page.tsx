import { Metadata } from "next";
import Image from "next/image";
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
            <Image
                className="bg-black py-2 px-4 rounded-lg bg-opacity-60 hover:bg-opacity-50"
                alt="mFlux_logo"
                src="/mFlux_logo.png"
                width={150}
                height={80}
                priority
            />

            <article className="text-xl font-medium text-black ml-3 p-2 max-w-[800px]">
                <b className="text-4xl text-[#fff]">mFlux</b> is built with TMDB
                API, Using <strong>Next.JS 13 </strong>{" "}
                <b className="text-sm">(Currently in beta).</b>
                <br />
                The role of this application is to provide latest movies & tv
                shows information. As every applications first priority is
                Perfomance, We are currently working towards new features. This
                Application uses Server Side Rendering & Image Optimizations,
                Thanks to <b className="text-lg">Next.JS</b> team. <br />
                The UI is integrated with the power of <b>TailwindCSS.</b>
                <br />
                Meanwhile you can view the{" "}
                <strong>
                    <a
                        className="text-red-800 text-base hover:text-green-700"
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
        </section>
    );
}
