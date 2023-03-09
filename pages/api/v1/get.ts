import { NextRequest, NextResponse } from "next/server";

export default (req: NextRequest, res: NextResponse) => {
    console.log("REQUEST at:", req.url);
    return res.status(200).json({ name: "success", stat: "siucees", there: 40 });
};
