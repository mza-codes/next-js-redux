"use client";

import { Crew } from "../@types";
import { GoHeart } from "react-icons/go";
import Link from "next/link";
import { useLocalStore } from "../store";

type Props = {
    person: Crew;
};

export const CrewSmallPhoto = ({ person }: Props) => {
    const addPerson = useLocalStore((s) => s.addPerson);
    return (
        <div className="mx-1 p-3">
            <div className="relative">
                <Link prefetch={false} href={`/discover/persons/${person?.id}`}>
                    <img
                        width={150}
                        height={150}
                        loading="lazy"
                        alt="person_avatar"
                        onLoad={({ currentTarget: e }) => e.classList.remove("load-pacleholder")}
                        src={
                            person?.profile_path
                                ? `https://image.tmdb.org/t/p/w300${person?.profile_path}`
                                : "/404.jpg"
                        }
                        className="load-pacleholder actor-avatar rounded-lg min-w-[124px] max-h-[150px] w-36 h-36 object-cover aspect-square"
                    />
                </Link>
                <div
                    className="icon text-rose-600 hover:text-rose-500 z-[104] opacity-0 hover:opacity-100 cursor-pointer absolute right-1 top-1"
                    title="Add To Favourites"
                    onClick={() => addPerson(person)}
                >
                    <GoHeart />
                </div>
            </div>
            <span className="text-white font-semibold text-base max-w-[100%]">
                {person?.name || person?.original_name}
            </span>
            <h4 className="text-gray-50 text-xs max-w-[100%]">
                {person?.job ?? person?.known_for_department ?? person?.department}
            </h4>
        </div>
    );
};
