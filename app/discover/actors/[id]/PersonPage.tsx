import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { FaImdb } from "react-icons/fa";
import { DetailedPerson } from "../../../../@types";
import { POSTER_URL } from "../../../../contstants";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

type Props = {
    actor: DetailedPerson;
};

export default function PersonPage({ actor }: Props) {
    return (
        <section
            className={`${righteous.className} flex flex-row flex-wrap justify-evenly`}
        >
            <div className="sm:w-full md:w-1/2 lg:w-1/2 max-w-md min-w-[280px] p-3 max-h-fit relative">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <Image
                            width={440}
                            height={640}
                            className="w-auto rounded-3xl"
                            src={
                                actor?.profile_path
                                    ? POSTER_URL + actor?.profile_path
                                    : "/404.jpg"
                            }
                            alt="person_image"
                        />

                        <div className="text-rose-500 hover:text-rose-600 z-50 opacity-0 hover:opacity-100 cursor-pointer absolute right-2 top-2">
                            <GoHeart />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile min-w-[280px] xl:max-w-[46vw] text-center ml-2 lg:max-w-[46vw] px-3 xl:text-start lg:text-start sm:text-center sm:mx-w-[80vw]">
                <h1 className="text-4xl text-zinc-200 font-righteous py-1">
                    {actor?.name}
                </h1>
                <h2 className="text-3xl text-zinc-300 font-righteous py-1">
                    {actor?.place_of_birth}
                </h2>
                <p className="text-2xl text-slate-300 font-righteous py-1">
                    {actor?.birthday && "Birthday: " + actor?.birthday}
                </p>
                {actor?.known_for_department && (
                    <h3 className="text-xl text-gray-300 font-righteous py-1">
                        Profession: {actor?.known_for_department}
                    </h3>
                )}
                <div className="links flex flex-row gap-3 justify-center xl:justify-start lg:justify-start sm:justify-center">
                    <a
                        href={`https://www.imdb.com/name/${actor?.imdb_id}`}
                        rel="noreferrer"
                        target="_blank"
                        className="text-xl text-yellow-600 font-righteous py-1 uppercase"
                    >
                        <FaImdb />{" "}
                    </a>
                    {actor?.homepage && (
                        <a
                            href={`${actor?.homepage}`}
                            rel="noreferrer"
                            target="_blank"
                            className="text-xl text-blue-500 font-righteous py-1 uppercase"
                        >
                            Web{" "}
                        </a>
                    )}
                </div>
                <p className="text-xl text-gray-400 p-2 font-kanit font-light ">
                    {actor?.biography?.length > 800
                        ? actor?.biography?.slice(0, 904) + "..."
                        : actor?.biography || "No Biography Found"}
                </p>
            </div>
        </section>
    );
}
