"use client";

import { Nunito } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import useUserModal from "../../hooks/useUserModal";
import { AnimatePresence, motion } from "framer-motion";
import { useLocalStore } from "../../store";

type Props = {};

const nunito = Nunito({
    display: "swap",
    preload: true,
    subsets: ["latin"],
    weight: ["400", "400", "500", "600", "700", "800", "900"],
    variable: "--nunito",
});

const nameKey = "mflux-name";
const dummyName = "Kosinski";

export default function UserModal({}: Props) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const userModal = useUserModal();
    const store = useLocalStore();

    const handleClose = () => {
        localStorage.setItem(nameKey, nameRef.current?.value?.slice(0, 10) ?? dummyName);
        userModal.onClose();
    };

    return (
        <AnimatePresence>
            {userModal.isOpen ? (
                <section
                    className={`fixed bg-gray-800/40 inset-0 col items-center justify-center ${nunito.className}`}
                >
                    <motion.main
                        initial={{ opacity: 0, translateY: "-100%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: "-100%" }}
                        transition={{ duration: 0.36 }}
                        className="bg-white px-6 py-8 rounded-md shadow-md flex flex-col gap-4 min-w-full sm:min-w-[440px] min-h-screen sm:min-h-[80vh] relative"
                    >
                        <h2 className="text-2xl font-semibold">
                            Welcome{" "}
                            <i className="font-black">
                                <input
                                    type="text"
                                    className="outline-none border-none p-2 max-w-[190px] w-fit overflow-hidden"
                                    placeholder={dummyName}
                                    defaultValue={localStorage.getItem(nameKey) ?? dummyName}
                                    ref={nameRef}
                                />
                            </i>
                        </h2>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="close absolute right-3 top-3 text-rose-600 hover:text-rose-800/80"
                        >
                            <MdClose size={22} />
                        </button>
                        {/* MainBody */}
                        <span>
                            Favourited Items:
                            &nbsp;<b>{store.movies.length}</b>
                        </span>
                        <span>
                            Favourited Persons:
                            &nbsp;<b>{store.persons.length}</b>
                        </span>
                        <button
                            type="button"
                            className="bg-red-600 hover:bg-red-700/80 p-2 text-white w-full rounded-lg font-semibold"
                            onClick={store.resetState}
                        >
                            Clear Data
                        </button>
                    </motion.main>
                </section>
            ) : null}
        </AnimatePresence>
    );
}
