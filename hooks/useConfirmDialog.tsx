import { atom, useAtom } from "jotai";

const dialogAtom = atom(false);

export default function useConfirmDialog() {
    const [isOpen, setIsOpen] = useAtom(dialogAtom);

    return {
        isOpen,
        setIsOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
    };
}
