import { GoHeart } from "react-icons/go";
import { FaImdb, FaGlobeAmericas } from "react-icons/fa";
import { DetailedPerson } from "../../../../@types";
import { POSTER_URL } from "../../../../contstants";

type Props = {
    actor: DetailedPerson;
};

export default function PersonPage({ actor }: Props) {
    return (
        <section className={`flex flex-row flex-wrap justify-evenly mt-4`}>
            <div className="w-full md:w-1/2 lg:w-1/2 max-w-md min-w-[280px] p-3 max-h-fit relative">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <img
                            loading="eager"
                            width={480}
                            height={640}
                            className="w-auto rounded-3xl"
                            src={actor?.profile_path ? `${POSTER_URL}${actor?.profile_path}` : "/404.jpg"}
                            alt="person_image"
                        />

                        <div className="icon text-2xl z-50 text-rose-500 absolute right-2 top-2">
                            <GoHeart />
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-[280px] xl:max-w-[46vw] text-center ml-2 py-2 lg:max-w-[46vw] px-3 xl:text-start lg:text-start sm:text-center sm:mx-w-[80vw]">
                <h1 className={"text-4xl py-1"}>{actor?.name}</h1>
                <h2 className="text-3xl py-1">{actor?.place_of_birth}</h2>
                <p className="text-2xl py-1">{actor?.birthday && "Birthday: " + actor?.birthday}</p>
                {actor?.known_for_department && (
                    <h3 className="text-xl py-1">Profession: {actor?.known_for_department ?? "Actor"}</h3>
                )}
                <div className="row xl:justify-start lg:justify-start sm:justify-center">
                    <a
                        href={`https://www.imdb.com/name/${actor?.imdb_id}`}
                        rel="noreferrer"
                        target="_blank"
                        className="text-3xl text-yellow-800 py-1"
                    >
                        <FaImdb />{" "}
                    </a>
                    {actor?.homepage && (
                        <a
                            href={`${actor?.homepage}`}
                            rel="noreferrer"
                            target="_blank"
                            className="text-3xl text-cyan-800 py-1"
                        >
                            <FaGlobeAmericas />{" "}
                        </a>
                    )}
                </div>
                <p className="text-xl py-2 font-light">
                    {actor?.biography?.length > 800
                        ? actor?.biography?.slice(0, 904) + "..."
                        : actor?.biography ?? "No Biography Found"}
                </p>
            </div>
        </section>
    );
}
