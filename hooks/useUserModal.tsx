import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const UserModalAtom = atom(false);

export default function useUserModal() {
    const [isOpen, setIsOpen] = useAtom(UserModalAtom);

    useEffect(() => {
        if (isOpen) document.body.classList.add("prevent-scroll");

        return () => {
            document.body.classList.remove("prevent-scroll");
        };
    }, [isOpen, setIsOpen]);

    return {
        isOpen,
        setIsOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
    };
}
