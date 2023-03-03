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

const bio = {
    adult: false,
    also_known_as: [
        "Άνια Τέιλορ-Τζόι",
        "Аня Тейлор-Джой",
        "安雅·泰勒-乔伊",
        "安雅‧泰勒-喬伊",
        "안야 테일러조이",
        "アニャ・テイラー＝ジョイ",
        "アニャ・テイラー・ジョイ",
    ],
    biography:
        "Anya-Josephine Marie Taylor-Joy (born 16 April 1996) is a British-American actress and model. She left school at age sixteen and began to pursue an acting career. After small television roles, she made her film debut with the lead role of Thomasin in the horror film The Witch (2015). She went on to star in the horror film Split and the black comedy Thoroughbreds (both 2017). She also appeared in the drama miniseries The Miniaturist (2017), the fifth and sixth series of Peaky Blinders (2019–2022) and The Dark Crystal: Age of Resistance (2019), and the superhero film Glass (2019), reprising her role from Split. Taylor-Joy will voice Princess Peach in the upcoming Mario film (2022) and portray the title character in Furiosa (2024).",
    birthday: "1996-04-16",
    deathday: null,
    gender: 1,
    homepage: null,
    id: 1397778,
    imdb_id: "nm5896355",
    known_for_department: "Acting",
    name: "Anya Taylor-Joy",
    place_of_birth: "Miami, Florida, USA",
    popularity: 39.461,
    profile_path: "/8YUcwFAOBK3Yt5jnj9G2U8IffD.jpg",
};

type initalMovie = Partial<typeof movie>;
type detailedMovie = Partial<typeof detailedMovie>;

type person = {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string;
    gender: number;
    homepage: string;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
};

export interface DetailedPerson extends person {
    profile_path?: string;
}

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
