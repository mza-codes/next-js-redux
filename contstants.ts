export const TMDB_URL = "https://api.themoviedb.org/3";
export const w300 = "https://image.tmdb.org/t/p/w300";
export const w500 = "https://image.tmdb.org/t/p/w500";
export const w780 = "https://image.tmdb.org/t/p/w780";
export const POSTER_URL = "https://image.tmdb.org/t/p/original";

export const populate = {
    romance: `/discover/movie?with_genres=10749`,
    tvPopular: `/tv/popular?language=en-US&page=1`,
    documentaries: `/discover/movie?with_genres=99`,
    horror: `/discover/movie?with_genres=27`,
    trending: `/trending/all/week?language=en-US`,
    comedy: `/discover/movie?with_genres=35`,
    action: `/discover/movie?with_genres=28`,
    topRated: `/movie/top_rated?with_genres=10751&page=1`,
    upcoming: `/movie/upcoming?language=en-US&page=1`,
    trending2: `/trending/all/day?language=en-US`,
    action2: `/discover/movie?with_genres=28`,
    originals: `/discover/tv?with_networks=213`,
    comedy2: `/discover/movie?with_genres=35`,
    horror2: `/discover/movie?with_genres=27`,
    romance2: `/discover/movie?with_genres=10749`,
    family: `/discover/movie?with_genres=10751`,
    popular: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,
};
