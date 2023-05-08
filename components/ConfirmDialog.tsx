"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import useConfirmDialog from "../hooks/useConfirmDialog";

export default function ConfirmDialog() {
    const { content, ...dialog } = useConfirmDialog();
    const bg = useRef<HTMLElement>(null);

    return (
        <AnimatePresence key={"confirm-dialog"}>
            {dialog.isOpen ? (
                <section
                    ref={bg}
                    className={`fixed bg-gray-800/50 inset-0 col items-center justify-center z-10`}
                >
                    <motion.main
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.26 }}
                        className="bg-white p-4 rounded-md shadow-md z-20 flex flex-col gap-4 relative items-center justify-center text-center"
                    >
                        <div className="font-semibold max-w-sm">{content.message}</div>
                        <div className="inline-flex gap-2 flex-wrap">
                            <button
                                onClick={() => {
                                    dialog.onClose();
                                    content.action();
                                }}
                                className="p-1 text-sm bg-red-600 hover:bg-red-700/80 text-white rounded-md"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={dialog.onClose}
                                className="p-1 text-sm bg-emerald-600 hover:bg-emerald-700/80 text-white rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.main>
                </section>
            ) : null}
        </AnimatePresence>
    );
}
