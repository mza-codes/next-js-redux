"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSettings } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { useMemo } from "react";

import Search from "./Search";
import { themes } from "../contstants";
import useModal from "../hooks/useModal";
import UserModalContent from "./modals/UserModal";
import useSideBar from "../hooks/useSideBar";
import useConfirmDialog from "../hooks/useConfirmDialog";
import useRunOnce from "../hooks/useRunOnce";

const links = [
    { name: "Home", path: "/home" },
    { name: "Trending", path: "/get-data" },
    { name: "About", path: "/" },
];

export default function Header() {
    const path = usePathname();
    const modal = useModal();
    const sidebar = useSideBar();
    const dialog = useConfirmDialog();

    const menu = (
        <div className="col gap-2 pt-4">
            {links.map((link) => (
                <Link
                    onClick={sidebar.onClose}
                    key={link.name}
                    className={`font-semibold py-2 px-4 text-sm rounded-md text-black shadow-md hover:shadow-lg ${
                        path === link.path
                            ? "bg-green-100 hover:bg-green-200/60"
                            : "bg-slate-200 hover:bg-slate-300/60"
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

    useRunOnce(() => {
        console.count("setting theme () => ");
        const theme = localStorage.getItem("app-theme");
        if (theme && themes.includes(theme)) {
            document.documentElement.classList.replace(
                document.documentElement.classList[0],
                theme
            );
        }
    });

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
