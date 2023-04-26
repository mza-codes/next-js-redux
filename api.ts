import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN!,
});

export default API;

/** 
 * @param { `/search/multi?query=${query}&page=1` } SEARCH
 */