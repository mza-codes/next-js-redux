import { NextApiRequest, NextApiResponse } from "next/types";
import TMDB, { fetchData } from "../../../server/tmdb";
import { APIResponse } from "../../../utils";

export default async function getData(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("QUERY:", req.query);
    const { type, cat, page } = req.query;

    if (!type || !cat || !page)
        return new APIResponse(res, 400, false, "Query Parameters Error!");

    const [err, data] = await fetchData(
        TMDB.get(`/${type}/${cat}?page=${page}`)
    );

    if (err)
        return new APIResponse(
            res,
            500,
            false,
            err?.message ?? "Error Getting Data!"
        );

    return new APIResponse(res, 200, true, "Fetched Data", {
        results: data?.results ?? null,
    });
}

/** @param { /movie/popular?page=INTEGER } */
