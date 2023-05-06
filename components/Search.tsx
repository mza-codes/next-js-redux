import { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

type Props = {};

export default function Search({}: Props) {
    const searchRef = useRef(null);
    
    return (
        <form action="/search" className="relative inline-flex gap-2">
            <input
                name="q"
                className={`search-input`}
                required
                pattern="^[a-zA-Z0-9][a-zA-Z0-9 ]*$"
                minLength={2}
                type="text"
                ref={searchRef}
                placeholder=" "
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
