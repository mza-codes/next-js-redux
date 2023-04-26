"use client";

import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import useUserModal from "../hooks/useUserModal";
import { useRef } from "react";

const links = [
    { name: "Home", path: "/home" },
    { name: "Trending", path: "/get-data" },
    { name: "About", path: "/" },
];

export default function Header() {
    const path = usePathname();
    const userModal = useUserModal();
    const searchRef = useRef(null);

    return (
        <header className="app-header px-4">
            <div className="left-section">
                <Link href="/">
                    <img
                        className="object-cover p-4"
                        alt="mFlux_logo"
                        src="/mFlux_logo.png"
                        width={150}
                        height={80}
                    />
                </Link>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        className={`header-link ${path === link.path ? "border-green-600" : ""}`}
                        href={link.path}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="right-section space-x-2">

                {/* <form action="/search" className="relative inline-flex gap-2">
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
                </form> */}
                
                <button
                    onClick={userModal.onOpen}
                    type="button"
                    className="text-slate-800 hover:text-slate-800/70"
                >
                    <FaUserAlt size={24} />
                </button>
            </div>
        </header>
    );
}
