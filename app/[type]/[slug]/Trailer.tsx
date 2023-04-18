import { Dispatch, SetStateAction, useState } from "react";
import { DetailedMovie } from "../../../@types";
import { AiFillCloseSquare } from "react-icons/ai";

type Props = {
    movie: DetailedMovie;
    open: [boolean, Dispatch<SetStateAction<boolean>>];
};

export default function Trailer({ movie, open }: Props) {
    const list = movie?.videos?.results ?? [];
    const [isOpen, setOpen] = open;

    const [trailers, setTrailers] = useState({
        data: movie?.videos?.results?.[0]?.key ?? null,
    });

    if (list.length <= 0 || !isOpen || !trailers.data) return null;

    function handleClose() {
        setOpen(false);
    }
    return (
        <div id="watchTrailer" className="w-auto h-auto">
            <div className="w-full flex flex-col test-center justify-center items-center text-white relative">
                <h3 className="h4">Watch Trailers</h3>
                <select
                    className="py-2 px-4 my-2 text-lg bg-gray-200 outline-none rounded-lg text-gray-800 "
                    onChange={(e) => {
                        setTrailers((c) => ({ ...c, data: e.target.value }));
                    }}
                >
                    {list?.map((video) => (
                        <option
                            key={video?.id}
                            value={video?.key}
                            className={`${
                                video?.key === trailers?.data
                                    ? "bg-green-300 p-2 font-semibold rounded-lg"
                                    : ""
                            }`}
                        >
                            {video?.type}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleClose}
                    className="absolute text-red-800 text-4xl right-2 btn-1 hover:text-red-600"
                    style={{ borderRadius: "50%" }}
                >
                    <AiFillCloseSquare />
                </button>
            </div>
            <div className="w-full flex items-center justify-center text-center p-1 m-0 ">
                <iframe
                    className={"aspect-[16/9]"}
                    allowFullScreen={true}
                    style={{ width: "100%", height: "100%" }}
                    title="Movie Trailers"
                    src={`https://www.youtube.com/embed/${trailers?.data}?fs=1`}
                ></iframe>
            </div>
        </div>
    );
}
