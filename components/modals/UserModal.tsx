"use client";

import { useLocalStore } from "../../store";
import { useRef } from "react";
import useConfirmDialog from "../../hooks/useConfirmDialog";
import ThemeControl from "../ThemeControl";
import useModal from "../../hooks/useModal";

const nameKey = "mflux-name";
const dummyName = "Kosinski";

export default function UserModalContent() {
    // const nameRef = useRef<HTMLInputElement | null>(null);
    const userModal = useModal();
    const store = useLocalStore();
    const confirmDialog = useConfirmDialog();
    const timeRef = useRef<NodeJS.Timeout>();

    const handleCloseWConfirm = () => {
        confirmDialog.setDialogProps({
            message: "Changes may not be saved, Continue ?",
            action: userModal.onClose,
        });
        // localStorage.setItem(nameKey, nameRef.current?.value?.slice(0, 12) ?? dummyName);
        confirmDialog.onOpen();
    };

    return (
        <>
            <h2 className="text-2xl font-semibold">
                Welcome{" "}
                <i className="font-black">
                    <input
                        type="text"
                        className="outline-none border-none p-2 max-w-[190px] w-fit overflow-hidden"
                        placeholder={dummyName}
                        defaultValue={localStorage.getItem(nameKey) ?? dummyName}
                        onChange={(e) => {
                            clearTimeout(timeRef.current);
                            timeRef.current = setTimeout(() => {
                                console.count(`set name => "${e.target.value}"`);
                                localStorage.setItem(
                                    nameKey,
                                    e.target.value?.slice(0, 12) ?? dummyName
                                );
                            }, 500);
                        }}
                    />
                </i>
            </h2>
            <span>
                Favourited Items: &nbsp;<b>{store.movies.length}</b>
            </span>
            <span>
                Favourited Persons: &nbsp;<b>{store.persons.length}</b>
            </span>
            <button
                type="button"
                className="bg-red-600 hover:bg-red-700/80 p-2 text-white w-full rounded-lg font-semibold"
                onClick={() => {
                    confirmDialog.setDialogProps({
                        message:
                            "Are You Sure, This will delete all of your favourited data ?",
                        action: store.resetState,
                    });
                    confirmDialog.onOpen();
                }}
            >
                Clear Data
            </button>
            <ThemeControl />
        </>
    );
}
