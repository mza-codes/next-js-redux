import { HttpStatusCode } from "axios";
import { NextApiResponse } from "next/types";
import { RefObject } from "react";

export const genTitle = (prefix: string) => `${prefix} | mFlux`;

export class APIResponse {
    constructor(res: NextApiResponse, code: HttpStatusCode, success: boolean, msg: string, payload = {}) {
        res.status(code).json(genBody(success, msg, payload));
        res.end();
        // genRes(res, code, success, msg, payload);
    }
}

export const genBody = (success = false, msg: string, payload: any) => {
    return {
        success,
        message: msg ?? "",
        ...payload,
    };
};

async function genRes(
    res: NextApiResponse,
    code: HttpStatusCode,
    success: boolean,
    msg: string,
    payload: any
) {
    if (!res || !code) throw new Error("res & code is required!");
    return res.status(code).json(genBody(success, msg, payload));
}

export function verifyEnv() {
    console.warn("Verifying Environment Variables");
    if (!process.env.TMDB_API_KEY) throw new Error("VARIABLE: `TMDB_API_KEY` is Missing!");
    if (!process.env.NEXT_PUBLIC_DOMAIN) throw new Error("VARIABLE `NEXT_PUBLIC_DOMAIN` is Required!");
    return;
}

export function genRandom(limit: number) {
    return Math.floor(Math.random() * limit) + 1;
}

export const storeVars = {
    movies: "movies",
    persons: "persons",
};

export function storeData(store: Storage, field: "movies" | "persons", value: any) {
    store.setItem(storeVars.movies, value);
    return true;
}

export const handleScroll = (param: "next" | "prev", ref: RefObject<HTMLElement>) => {
    if (!ref.current) return false;
    if (param === "next") {
        ref.current.scrollTo({
            left: ref.current.scrollLeft + 200,
            behavior: "smooth",
        });
        return;
    } else if (param === "prev") {
        ref.current.scrollTo({
            left: ref.current.scrollLeft - 200,
            behavior: "smooth",
        });
        return;
    }
};
