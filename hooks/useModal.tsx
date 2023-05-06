import { atom, useAtom } from "jotai";
import { ReactNode, useEffect } from "react";

const initialContent = <>Nothing Here!</>;

const isActiveAtom = atom(false);
const dialogContent = atom<ReactNode>(initialContent);
const dialogActions = atom<any>({ clickAwayAction: null });

export default function useModal() {
    const [isOpen, setIsOpen] = useAtom(isActiveAtom);
    const [dialogProps, setDialogProps] = useAtom(dialogContent);
    const [action, setAction] = useAtom(dialogActions);

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
            setDialogProps(initialContent);
        },
        clickAwayAction: action.clickAwayAction,
        content: dialogProps,
        setContent: (body: ReactNode) => setDialogProps(body),
        openWithContent: (content: ReactNode, clickAwayAction?: () => void) => {
            setDialogProps(content);
            setIsOpen(true);
            if (clickAwayAction instanceof Function)
                setAction({ clickAwayAction: clickAwayAction });
        },
    };
}
