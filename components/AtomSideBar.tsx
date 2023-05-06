"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { MdClose } from "react-icons/md";
import useClickAwayListener from "../hooks/useClickAwayListener";
import useSideBar from "../hooks/useSideBar";

export default function AtomSideBar() {
    const sidebar = useSideBar();
    const bgRef = useRef<HTMLElement | null>(null);

    useClickAwayListener({
        action: sidebar.onClose,
        backDropRef: bgRef,
        dependencies: [sidebar.isOpen],
        selector: "#sidebar",
    });

    return (
        <AnimatePresence key={"sidebar"}>
            {sidebar.isOpen ? (
                <section
                    ref={bgRef}
                    className={`fixed bg-black/40 inset-0 col items-center justify-center`}
                >
                    <motion.main
                        id="sidebar"
                        initial={{ opacity: 0, translateX: "-100%" }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, translateX: "-100%" }}
                        transition={{ duration: 0.36 }}
                        className="bg-white px-4 py-8 rounded-r-md shadow-md flex flex-col gap-4 min-w-[250px] sm:min-w-[340px] min-h-[100dvh] absolute left-0"
                    >
                        <button
                            type="button"
                            onClick={sidebar.onClose}
                            className="close absolute right-3 top-3 text-rose-600 hover:text-rose-800/80"
                        >
                            <MdClose size={22} />
                        </button>
                        {sidebar.content}
                    </motion.main>
                </section>
            ) : null}
        </AnimatePresence>
    );
}
