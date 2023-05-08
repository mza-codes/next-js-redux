import { atom, useAtom } from "jotai";
import { ReactNode, useEffect } from "react";

const dialogAtom = atom(false);

const dialogContent = atom<DialogProps>({
    message: "Are you Sure ?",
    action: () => {
        console.log("default func ran!!");
    },
});

type DialogProps = {
    message: ReactNode;
    action: Function;
};

export default function useConfirmDialog() {
    const [isOpen, setIsOpen] = useAtom(dialogAtom);
    const [dialogProps, setDialogProps] = useAtom(dialogContent);

    const handleClose = (ev: KeyboardEvent) => {
        console.log("event listener call handleClose => ", ev);
        if (ev.key === "Escape") setIsOpen(false);
        if (ev.key === "Enter") {
            dialogProps.action();
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) document.body.addEventListener("keydown", handleClose);
        else document.body.removeEventListener("keydown", handleClose);
        return () => document.body.removeEventListener("keydown", handleClose);
    }, [isOpen, setIsOpen]);

    return {
        isOpen,
        setIsOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
        content: dialogProps,
        setDialogProps,
        openWithContent: (message: ReactNode, action: Function) => {
            setDialogProps({
                action,
                message,
            });
            setIsOpen(true);
        },
    };
}
