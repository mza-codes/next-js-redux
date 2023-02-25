import axios from "axios";

if (!process.env.NEXT_PUBLIC_DOMAIN)
    throw new Error("VARIABLE `NEXT_PUBLIC_DOMAIN` is Required!");

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN!,
});

export default API;
