"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSettings } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useMemo, useRef } from "react";

import Search from "./Search";
import { themes } from "../contstants";
import useModal from "../hooks/useModal";
import UserModalContent from "./modals/UserModal";
import useSideBar from "../hooks/useSideBar";
import useConfirmDialog from "../hooks/useConfirmDialog";

const links = [
    { name: "Home", path: "/home" },
    { name: "Trending", path: "/get-data" },
    { name: "About", path: "/" },
];

export default function Header() {
    const path = usePathname();
    const modal = useModal();
    const sidebar = useSideBar();
    const ran = useRef(false);
    const dialog = useConfirmDialog();

    const menu = (
        <div className="col gap-2 pt-4">
            {links.map((link) => (
                <Link
                    onClick={sidebar.onClose}
                    key={link.name}
                    className={`font-bold py-2 px-4 text-sm rounded-md text-white hover:text-black ${
                        path === link.path
                            ? "bg-green-600 hover:bg-green-500/60"
                            : "bg-slate-600 hover:bg-slate-500/60"
                    }`}
                    href={link.path}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );

    const userModalBtn = useMemo(
        () => (
            <button
                onClick={() => {
                    modal.openWithContent(<UserModalContent />, () => {
                        dialog.openWithContent(
                            "Changes may not be saved, Continue ?",
                            modal.onClose
                        );
                    });
                }}
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
            <div className="right-section">
                <div className="hidden md:flex items-center gap-2 flex-wrap">
                    <Search />
                </div>
                {/* <div className="block md:hidden"> */}
                <button
                    onClick={() => sidebar.openWithContent(menu)}
                    className="p-2 hover:text-white/70 text-white"
                >
                    <HiMenuAlt3 size={26} />
                </button>
                {/* </div> */}
                {userModalBtn}
            </div>
        </header>
    );
}
