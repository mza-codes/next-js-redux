"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import useUserModal from "../hooks/useUserModal";
import { useMemo } from "react";
import Search from "./Search";
import { MdMenu } from "react-icons/md";
import useConfirmDialog from "../hooks/useConfirmDialog";

const links = [
    { name: "Home", path: "/home" },
    { name: "Trending", path: "/get-data" },
    { name: "About", path: "/" },
];

export default function Header() {
    const path = usePathname();
    const userModal = useUserModal();
    const dialog = useConfirmDialog();
    const { setDialogProps } = dialog;

    const userModalBtn = useMemo(
        () => (
            <button
                onClick={userModal.onOpen}
                type="button"
                className="text-slate-800 hover:text-slate-800/70"
            >
                <FaUserAlt size={24} />
            </button>
        ),
        []
    );

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
                <div className="hidden md:flex items-center gap-2">
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
            </div>
            <div className="right-section space-x-2">
                <div className="hidden md:flex items-center gap-2 flex-wrap">
                    <Search />
                </div>
                {/* <div className="block md:hidden">
                    <Search />
                </div> */}
                <button
                    type="button"
                    onClick={() => {
                        setDialogProps({ message: "This is Test?", action: dialog.onClose });
                        dialog.onOpen();
                    }}
                >
                    <MdMenu size={24} />
                </button>

                {userModalBtn}
            </div>
        </header>
    );
}
