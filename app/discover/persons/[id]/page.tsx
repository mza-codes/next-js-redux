import Error from "../../../../components/Error";
import TMDB from "../../../../server/tmdb";
import DisplayData from "../../../get-data/Client";
import GenreSuggestions from "../../../[type]/[slug]/Suggestions";
import PersonPage from "./PersonPage";

type Props = {
    params: {
        id: number;
    };
    // searchParams?: { [key: string]: string | string[] | undefined };
    searchParams?: any;
};
export default async function GetActorSSR({ params, searchParams }: Props) {
    const { page = 1 } = searchParams;
    const { id } = params;
    try {
        const { data: person } = await TMDB.get(`/person/${id}`);
        let { data } = await TMDB.get(
            `/discover/movie?with_cast=${id}&page=${page}`
        );

        let ERR = !data || data?.results?.length <= 0;
        if (ERR && page > data?.total_pages) {
            const { data: result } = await TMDB.get(
                `/discover/movie?with_cast=${id}&page=${data?.total_pages}`
            );
            data = result;
        }
        ERR = !data || data?.results?.length <= 0;

        return (
            <>
                <PersonPage actor={person} />
                {ERR ? (
                    <Error
                        message={`Unable to Fetch Page: ${page} \n Available Pages: ${
                            data?.total_pages ?? 0
                        }`}
                    />
                ) : (
                    <>
                        <h2 className="h4 py-2 text-center">
                            You may also Like
                        </h2>
                        <DisplayData
                            currentPage={1 + 1}
                            items={data?.results ?? []}
                        />
                    </>
                )}
            </>
        );
    } catch (err) {
        console.log("Error Fetching Actor SSR: ", err);
        return <Error message={`Person with ID: ${id} Not Found!`} />;
    }
}
