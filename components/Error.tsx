import Link from "next/link";

type Props = {
    message?: string;
};

export default function Error({ message }: Props) {
    return (
        <div className="bg-white bg-opacity-60 rounded-md p-6 flex flex-col gap-3 items-center ">
            <h1 className="h4 mb-3">{message ?? "Error Getting Data"}</h1>
            <Link className="btn-1 mx-auto bg-teal-800 text-white" href="/">
                Go Home
            </Link>
        </div>
    );
}
