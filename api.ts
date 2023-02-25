import axios from "axios";

const API = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
        api_key: "14a7e4429fa0d8465645b61e335f68ce",
    },
});

export default API;
