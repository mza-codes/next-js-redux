import Error from "../../../../components/Error";
import TMDB from "../../../../server/tmdb";
import PersonPage from "./PersonPage";

type Props = {
    params: {
        id: number;
    };
};
export default async function GetActorSSR({ params }: Props) {
    console.log("Params GETACTOR SSR", params);
    const { id } = params;
    try {
        const { data: person } = await TMDB.get(`/person/${id}`);
        console.log("PERSON: ", person);
        return <PersonPage actor={person} />;
    } catch (err) {
        console.log("Error Fetching Actor SSR: ", err);
        return <Error message={`Person with ID: ${id} Not Found!`} />;
    }
}
