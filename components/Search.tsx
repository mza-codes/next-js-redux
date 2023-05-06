import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

type Props = {};

export default function Search({}: Props) {
    const searchRef = useRef(null);
    const router = useRouter();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search?q=${new FormData(e.currentTarget).get("q")}&page=1`);
    }, []);

    return (
        <form onSubmit={handleSubmit} className="relative inline-flex gap-2">
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
            <button
                type="submit"
                className="text-white opacity-30 hover:opacity-100 my-1 rounded-xl absolute right-2"
            >
                <BiSearchAlt size={22} />
            </button>
        </form>
    );
}
