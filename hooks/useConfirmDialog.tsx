import { atom, useAtom } from "jotai";
import { ReactNode } from "react";

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
