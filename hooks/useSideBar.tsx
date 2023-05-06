import { atom, useAtom } from "jotai";
import { ReactNode, useEffect } from "react";

const initialContent = <>Nothing Here!</>;

const isActiveAtom = atom(false);
const menuContent = atom<ReactNode>(initialContent);

export default function useSideBar() {
    const [isOpen, setIsOpen] = useAtom(isActiveAtom);
    const [menuProps, setMenuProps] = useAtom(menuContent);

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
        onClose: () => {
            setIsOpen(false);
            setMenuProps(initialContent);
        },
        content: menuProps,
        setContent: (body: ReactNode) => setMenuProps(body),
        openWithContent: (content: ReactNode) => {
            setMenuProps(content);
            setIsOpen(true);
        },
    };
}
