"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { MdClose } from "react-icons/md";
import useClickAwayListener from "../../hooks/useClickAwayListener";
import useModal from "../../hooks/useModal";

export default function AtomModal() {
    const modal = useModal();
    const bg = useRef<HTMLElement | null>(null);

    useClickAwayListener({
        action: modal.clickAwayAction ?? modal.onClose,
        backDropRef: bg,
        dependencies: [modal.isOpen],
        selector: "#modal",
    });

    return (
        <AnimatePresence key={"modal"}>
            {modal.isOpen ? (
                <section
                    ref={bg}
                    className={`fixed bg-black/40 inset-0 col items-center justify-center`}
                >
                    <motion.main
                        id="modal"
                        initial={{ opacity: 0, translateY: "-100%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: "-100%" }}
                        transition={{ duration: 0.36 }}
                        className="bg-white px-6 py-8 sm:rounded-md shadow-md flex flex-col gap-4 min-w-full sm:min-w-[440px] min-h-[100dvh] sm:min-h-[80vh] relative"
                    >
                        <button
                            type="button"
                            onClick={modal.onClose}
                            className="close absolute right-3 top-3 text-rose-600 hover:text-rose-800/80"
                        >
                            <MdClose size={22} />
                        </button>
                        {modal.content}
                    </motion.main>
                </section>
            ) : null}
        </AnimatePresence>
    );
}
