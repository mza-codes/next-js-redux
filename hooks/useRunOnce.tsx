import { useEffect, useRef } from "react";

type Props = Function;

export default function useRunOnce(action: Props) {
    const ran = useRef(false);

    useEffect(() => {
        if (!ran.current) {
            action();
        }

        return () => {
            ran.current = true;
        };
    }, []);
}
