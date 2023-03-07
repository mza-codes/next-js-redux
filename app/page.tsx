import { genTitle } from "../utils";

export const metadata = {
    title: genTitle("Home"),
    authors: { name: "mza-codes", url: "https://mza-codes.github.io/" },
    keywords: ["Next.js", "React", "mflux", "mFlux"],
    description: "mFlux - TMDB Based Open Source Project",
};

export default async function Page({ searchParams }: any) {
    const user = await new Promise((res) => {
        res({
            name: "ffggTThHH",
            age: 43,
            place: "sdgsdfhfdhdfhfd",
            cc: "dfsfsdfsdfdsffds",
            ping: "fdghd",
            pincode: 45201123,
        });
    });
    return (
        <section>
            <h2>Hello World</h2>
            <article>{JSON.stringify(user, null, 1)}</article>
            <article>{JSON.stringify(searchParams, null, 1)}</article>
        </section>
    );
}
