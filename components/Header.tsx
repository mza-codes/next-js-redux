"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSettings } from "react-icons/io5";
import useUserModal from "../hooks/useUserModal";
import { useEffect, useMemo, useRef } from "react";
import Search from "./Search";
import { themes } from "../contstants";

const links = [
    { name: "Home", path: "/home" },
    { name: "Trending", path: "/get-data" },
    { name: "About", path: "/" },
];

export default function Header() {
    const path = usePathname();
    const userModal = useUserModal();
    const ran = useRef(false);

    const userModalBtn = useMemo(
        () => (
            <button
                onClick={userModal.onOpen}
                type="button"
                className="text-slate-800 hover:text-slate-800/70"
            >
                <IoSettings size={24} />
            </button>
        ),
        []
    );

    useEffect(() => {
        if (!ran.current) {
            console.count("setting theme () => ");
            const theme = localStorage.getItem("app-theme");
            // @ts-ignore
            if (theme && themes.includes(theme)) {
                document.documentElement.classList.replace(
                    document.documentElement.classList[0],
                    theme
                );
            }
        }
        return () => {
            ran.current = true;
        };
    }, []);

    return (
        <header className="app-header px-4">
            <div className="left-section">
                <Link href="/">
                    <img
                        className="object-cover p-4 max-w-[120px] max-h-14  sm:max-h-20"
                        alt="mFlux_logo"
                        src="/mFlux_logo.png"
                    />
                </Link>
                <div className="hidden md:flex items-center gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            className={`header-link ${
                                path === link.path
                                    ? "border-green-600 font-extrabold"
                                    : "font-bold"
                            }`}
                            href={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="right-section space-x-2">
                <div className="hidden md:flex items-center gap-2 flex-wrap">
                    <Search />
                </div>
                {/* <div className="block md:hidden">
                    <Search />
                </div> */}

                {userModalBtn}
            </div>
        </header>
    );
}
