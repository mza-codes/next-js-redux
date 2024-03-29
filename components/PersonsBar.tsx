"use client";

import { useRef } from "react";
import { Crew, Person } from "../@types";
import { ActorSmallPhoto } from "./ActorAvatar";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { genRandom, handleScroll } from "../utils";

type Props = {
    arr: Person[] | Crew[];
    title: string;
};

export default function PersonBar({ arr, title }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="max-w-[98vw] mx-auto px-3 relative persons-container0">
            <h2 className="font-righteous text-2xl py-2 ml-3 font-bold">
                {title} &nbsp;
                <span className="py-1 px-2 bg-green-200 font-black font-poppins text-sm rounded-md">
                    {arr?.length}
                </span>
            </h2>
            <div
                ref={scrollRef}
                className="w-full h-auto flex overflow-hidden persons-container overflow-x-scroll"
            >
                <button
                    onClick={() => handleScroll("prev", scrollRef)}
                    onMouseEnter={() => handleScroll("prev", scrollRef)}
                    className="absolute top-0 bottom-0 text-2xl z-50 left-0 hover:text-black active:scale-95 rounded-sm hover:bg-white hover:opacity-50"
                >
                    <GrFormPrevious />
                </button>
                <button
                    onClick={() => handleScroll("next", scrollRef)}
                    onMouseEnter={() => handleScroll("next", scrollRef)}
                    className="absolute top-0 bottom-0 text-2xl z-50 right-0 hover:text-black active:scale-95 rounded-sm hover:bg-white hover:opacity-50"
                >
                    <MdNavigateNext />
                </button>

                {arr?.slice(0, 25).map((person, i) => (
                    <ActorSmallPhoto
                        person={person}
                        key={person?.id ?? i + genRandom(50) - 1}
                    />
                ))}
            </div>
        </div>
    );
}
