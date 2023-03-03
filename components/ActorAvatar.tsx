import Image from "next/image";
import { Person } from "../@types";

type Props = {
    person: Person;
};

export const ActorSmallPhoto = ({ person }: Props) => {
    return (
        <div className="mx-1 p-3 cursor-pointer hover:scale-105 transition-all ease-linear">
            <div className="relative">
                {/* <Image
                    width={80}
                    height={80}
                    alt="person_avatar"
                    src={
                        person?.profile_path
                            ? `https://image.tmdb.org/t/p/w300${person?.profile_path}`
                            : "/404.jpg"
                    }
                    className="rounded-lg min-w-[124px] max-h-[150px] w-36 h-36 object-cover aspect-square"
                /> */}
                <img
                    width={80}
                    height={80}
                    alt="person_avatar"
                    src={
                        person?.profile_path
                            ? `https://image.tmdb.org/t/p/w300${person?.profile_path}`
                            : "/404.jpg"
                    }
                    className="rounded-lg min-w-[124px] max-h-[150px] w-36 h-36 object-cover aspect-square"
                />
                <div
                    className="icon text-rose-600 hover:text-rose-500 z-[104] opacity-0 hover:opacity-100 cursor-pointer absolute right-1 top-1"
                    title="Add To Favourites"
                    // onClick={() => addPerson(person)}
                >
                    {/* <iconify-icon icon="mdi:favourite" width={18} height={18} /> */}
                    Add
                </div>
            </div>
            <span className="text-white text-base max-w-[100%]">
                {person?.name || person?.original_name}
            </span>
            <h4 className="text-gray-400 text-sm max-w-[100%]">
                {person?.character}
            </h4>
        </div>
    );
};
