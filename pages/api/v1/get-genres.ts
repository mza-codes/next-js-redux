import { NextApiRequest, NextApiResponse } from "next/types";
import TMDB, { fetchData } from "../../../server/tmdb";
import { APIResponse } from "../../../utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("QUERY:", req.query);
    const { type, genre, page } = req.query;

    if (!type || !genre || !page)
        return new APIResponse(res, 400, false, "Invalid Query Parameters!");

    const [err, data] = await fetchData(
        TMDB.get(`/discover/${type}?with_genres=${genre}&page=${page}`)
    );

    if (err)
        return new APIResponse(
            res,
            500,
            false,
            err?.message ?? "Error Getting Data!"
        );

    return new APIResponse(
        res,
        200,
        true,
        `Response for Genre:${genre} with page:${page}`,
        {
            results: data?.results ?? null,
        }
    );
}
