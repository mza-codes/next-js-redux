import { NextApiRequest, NextApiResponse } from "next/types";
import { APIResponse } from "../../../../utils";

export default function getData(req: NextApiRequest, res: NextApiResponse) {
    console.log("QQ: ", req.query);
    return new APIResponse(res, 401, true, "Hi there $$%4", { "0145": 4 });
}

/** @param { /movie/popular?page=INTEGER } */