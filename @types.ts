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

type initalMovie = Partial<typeof movie>;

export interface Movie extends initalMovie {
    first_air_date?: string;
    name?: string;
    original_name?: string;
}
