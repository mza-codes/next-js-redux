import { MutableRefObject, useEffect } from "react";

type Props = {
    backDropRef: MutableRefObject<HTMLElement | null>;
    action: () => void;
    dependencies: any[];
    selector: string;
};

export default function useClickAwayListener({
    action,
    backDropRef,
    dependencies,
    selector,
}: Props) {
    useEffect(() => {
        backDropRef.current?.addEventListener("click", (e) => {
            // @ts-ignore
            const self = e?.target?.closest(selector);
            if (!self) action();
            else return;
        });

        return () => backDropRef.current?.removeEventListener("click", action);
    }, dependencies);
    return null;
}
