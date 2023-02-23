import { Main } from "next/document";
import { useRouter } from "next/router";

export default function GetMovie() {
    const { slug } = useRouter().query;
    console.log("SLUG: ", slug);

    return (
      main
    )
}
