"use client";

import { RefObject, useRef } from "react";
import { Person } from "../@types";
import { ActorSmallPhoto } from "./ActorAvatar";

type Props = {
    cast: Person[];
};

export default function PersonBar({ cast }: Props) {
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
        <div className="max-w-[98vw] px-3 relative persons-container">
            <h2 className="font-righteous text-2xl py-2 ml-4">
                Top Cast &nbsp;
                <span className="py-1 px-2 bg-green-700 font-poppins text-sm rounded-md ">
                    {cast?.length}
                </span>
            </h2>
            <div
                ref={scrollRef}
                className="w-full h-auto flex overflow-hidden persons-container"
            >
                <button
                    onClick={(e) => handleScroll("prev", scrollRef)}
                    onMouseEnter={(e) => handleScroll("prev", scrollRef)}
                    className="absolute top-0 bottom-0 text-2xl left-0 text-orange-200 hover:text-black rounded-2xl hover:bg-white hover:opacity-50"
                >
                    prev
                </button>
                <button
                    onClick={(e) => handleScroll("next", scrollRef)}
                    onMouseEnter={(e) => handleScroll("next", scrollRef)}
                    className="absolute top-0 bottom-0 text-2xl right-0 text-orange-200 hover:text-black rounded-2xl hover:bg-white hover:opacity-50"
                >
                    next
                </button>

                {cast?.slice(0, 25).map((person, i) => (
                    <ActorSmallPhoto
                        person={person}
                        key={
                            person?.id * i - i ||
                            person?.id ||
                            person?.credit_id
                        }
                    />
                ))}
            </div>
        </div>
    );
}
