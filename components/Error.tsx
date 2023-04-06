import Link from "next/link";

type Props = {
    message?: string;
};

export default function Error({ message }: Props) {
    return (
        <div className="flex flex-col items-center gap-3 rounded-md bg-red-50 bg-opacity-60 p-6 text-center">
            <img
                src="/mFlux_logo.png"
                width={150}
                height={80}
                alt="logo"
                className="py-2"
            />
            <h1 className="h5 mb-3 max-w-[400px]">
                {message ?? "Uh'uh Looks like some error occured!"}
            </h1>
            <Link className="btn-1 mx-auto bg-white text-black" href="/">
                Go Home
            </Link>
        </div>
    );
}
