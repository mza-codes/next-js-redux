"use client";

import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export function ImgWithSkeleton(props: Props) {
    return (
        <img
            {...props}
            className={`${props.className} load-placeholder`}
            loading="lazy"
            onLoad={({ currentTarget: el }) => el.classList.remove("load-placeholder")}
            onLoadedData={(e) => {
                console.log("onloadedData", e);
            }}
        />
    );
}

export function ImgWithSkeletonV1(props: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        console.log("useEffect init => ", props);

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("intersec [entry] =>", {
                    isLoaded,
                    imgRef,
                    props: props.src,
                });
                if (entry.isIntersecting) {
                    console.log("intersecting => true");

                    setIsLoaded(true);
                    // @ts-ignore
                    observer.unobserve(imgRef.current);
                }
            },
            { rootMargin: "100px", threshold: 0.4 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => {
            console.log("return () => component unmout:", {
                isLoaded,
                imgRef,
                props: props.src,
            });

            if (imgRef.current) observer.unobserve(imgRef.current);
        };
    }, []);

    return (
        <>
            {isLoaded ? (
                <img ref={imgRef} {...props} />
            ) : (
                <div className="absolute inset-0 load-placeholder rounded-md" />
            )}
        </>
    );
}

/*
export default function LazyImage(props: Props) {
    const [isLoaded, setIsLoaded] = useState(false);

    return <>{isLoaded ? <img {...props} /> : <div className="skelton"></div>}</>;
} */
