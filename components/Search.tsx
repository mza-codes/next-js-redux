import { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

type Props = {};

export default function Search({}: Props) {
    const searchRef = useRef(null);
    
    return (
        <form action="/search" className="relative inline-flex gap-2">
            <input
                name="q"
                className={`py-1 pr-12 pl-4 rounded-tr-md rounded-tl-md max-w-[200px] border-green-500 invalid:border-red-500 border-b-[3.0px] bg-black/40 text-white`}
                required
                pattern="^[a-zA-Z0-9][a-zA-Z0-9 ]*$"
                minLength={2}
                type="text"
                ref={searchRef}
                placeholder="Search.."
                maxLength={50}
            />
            <input type="hidden" value={1} name="page" />
            <button
                type="submit"
                className="text-white opacity-30 hover:opacity-100 my-1 rounded-xl absolute right-2"
            >
                <BiSearchAlt size={22} />
            </button>
        </form>
    );
}
