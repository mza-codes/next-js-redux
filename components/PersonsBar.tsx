"use client";

import { RefObject, useRef } from "react";
import { Crew, Person } from "../@types";
import { ActorSmallPhoto } from "./ActorAvatar";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CrewSmallPhoto } from "./CrewAvatar";
import Link from "next/link";

type Props = {
    cast?: Person[];
    crew?: Crew[];
    actor?: boolean;
    title: string;
};

export default function PersonBar({ cast, crew, actor = false, title }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (
        param: "next" | "prev",
        ref: RefObject<HTMLDivElement>
    ) => {
        if (!ref.current) return false;
        if (param === "next") {
            ref.current.scrollTo({
                left: ref.current.scrollLeft + 200,
                behavior: "smooth",
            });
            return;
        } else if (param === "prev") {
            ref.current.scrollTo({
                left: ref.current.scrollLeft - 200,
                behavior: "smooth",
            });
            return;
        }
    };
    return (
        <div className="max-w-[98vw] mx-auto px-3 relative persons-container">
            <h2 className="font-righteous text-2xl py-2 ml-3 font-bold">
                {title} &nbsp;
                <span className="py-1 px-2 bg-green-200 font-black font-poppins text-sm rounded-md">
                    {actor ? cast?.length : crew?.length}
                </span>
            </h2>
            <div
                ref={scrollRef}
                className="w-full h-auto flex overflow-hidden persons-container"
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

                {actor
                    ? cast?.slice(0, 25).map((person, i) => (
                          <Link href={`/discover/persons/${person?.id}`}>
                              <ActorSmallPhoto
                                  person={person}
                                  key={
                                      person?.id * i - i ||
                                      person?.id ||
                                      person?.credit_id
                                  }
                              />
                          </Link>
                      ))
                    : crew?.slice(0, 25).map((person, i) => (
                          <Link href={`/discover/persons/${person?.id}`}>
                              <CrewSmallPhoto
                                  person={person}
                                  key={
                                      person?.id * i - i ||
                                      person?.id ||
                                      person?.credit_id
                                  }
                              />
                          </Link>
                      ))}
            </div>
        </div>
    );
}
