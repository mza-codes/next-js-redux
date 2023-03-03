const movie = {
    adult: false,
    backdrop_path: "/nWs0auTqn2UaFGfTKtUE5tlTeBu.jpg",
    genre_ids: [10751, 35, 14],
    id: 668482,
    original_language: "en",
    original_title: "Roald Dahl's Matilda the Musical",
    overview:
        "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
    popularity: 466.439,
    poster_path: "/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
    release_date: "2022-11-25",
    title: "Roald Dahl's Matilda the Musical",
    video: false,
    vote_average: 6.9,
    vote_count: 496,
};

const detailedMovie = {
    adult: false,
    backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    belongs_to_collection: null,
    budget: 200000000,
    genres: [
        {
            id: 28,
            name: "Action",
        },
    ],
    homepage: "https://www.dc.com/BlackAdam",
    id: 436270,
    imdb_id: "tt6443346",
    original_language: "en",
    original_title: "Black Adam",
    overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    popularity: 888.835,
    poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    production_companies: [
        {
            id: 12,
            logo_path: "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
            name: "New Line Cinema",
            origin_country: "US",
        },
    ],
    production_countries: [
        {
            iso_3166_1: "US",
            name: "United States of America",
        },
    ],
    release_date: "2022-10-19",
    revenue: 392952111,
    runtime: 125,
    spoken_languages: [
        {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
        },
    ],
    status: "Released",
    tagline: "The world needed a hero. It got Black Adam.",
    title: "Black Adam",
    video: false,
    vote_average: 7.171,
    vote_count: 4250,
    videos: {
        results: [
            {
                iso_639_1: "en",
                iso_3166_1: "US",
                name: "Waller Briefing",
                key: "rCOkYwLKPv8",
                site: "YouTube",
                size: 1080,
                type: "Clip",
                official: true,
                published_at: "2023-01-17T16:59:49.000Z",
                id: "63c71f1341ad8d05ad97d23c",
            },
        ],
    },
    credits: {
        cast: [
            {
                adult: false,
                gender: 2,
                id: 18918,
                known_for_department: "Acting",
                name: "Dwayne Johnson",
                original_name: "Dwayne Johnson",
                popularity: 52.933,
                profile_path: "/cgoy7t5Ve075naBPcewZrc08qGw.jpg",
                cast_id: 0,
                character: "Black Adam / Teth Adam",
                credit_id: "59e392f39251410b67000225",
                order: 0,
            },
        ],
        crew: [
            {
                adult: false,
                gender: 2,
                id: 54420,
                known_for_department: "Sound",
                name: "David Sardy",
                original_name: "David Sardy",
                popularity: 0.98,
                profile_path: "/cgoy7t5Ve075naBPcewZrc08qGw.jpg",
                credit_id: "6391d12e18864b00eeb4ee5a",
                department: "Sound",
                job: "Original Music Composer",
            },
        ],
    },
};

type initalMovie = Partial<typeof movie>;
type detailedMovie = Partial<typeof detailedMovie>;

export type Crew = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
};

export type Person = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};

export interface Movie extends initalMovie {
    first_air_date?: string;
    name?: string;
    original_name?: string;
    type?: string;
}

export interface DetailedMovie extends detailedMovie {
    original_name?: string;
    name?: string;
    first_air_date?: string;
}
