"use client";

import Link from "next/link";
import { Righteous } from "next/font/google";
import { usePathname } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import useUserModal from "../hooks/useUserModal";

const righteous = Righteous({
    display: "swap",
    subsets: ["latin"],
    weight: ["400"],
    preload: true,
});

const links = [
    { name: "Home", path: "/home" },
    { name: "Trending", path: "/get-data" },
    { name: "About", path: "/" },
];

export default function Header() {
    const path = usePathname();
    const userModal = useUserModal();

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
            <div className="right-section">
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
