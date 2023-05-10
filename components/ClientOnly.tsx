"use client";

import { ReactNode, useState } from "react";
import useRunOnce from "../hooks/useRunOnce";
import LoadBar from "./LoadBar";
import LoaderPlaceHolder from "./LoaderPlaceHolder";

type Props = {
    children: ReactNode;
};

export default function ClientOnly({ children }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    useRunOnce(() => setIsVisible(true));

    if (!isVisible)
        return (
            <section className="col center min-h-[100dvh]">
                {/* <h2 className="m-4 text-2xl font-black min-h-screen col center">Loading..</h2> */}
                <LoadBar loading={true} />
                <LoaderPlaceHolder />
            </section>
        );
    else return <>{children}</>;
}
