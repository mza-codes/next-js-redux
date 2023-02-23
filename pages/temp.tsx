import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState } from "../slices/authSlice";
import { AppState, wrapper } from "../store";

export default function Home() {
    const auth = useSelector((s: AppState) => s.auth.userActive);
    const dispatch = useDispatch();
    console.log("AUTH: ", auth);

    return (
        <section>
            <Head>
                <title>Main Home</title>
            </Head>
            <div className="bg-green-300 font-medium p-3 rounded-lg">
                <center>{auth ? "Logged IN" : "Inactive Session"}</center>
            </div>
            <div className="flex flex-row items-center gap-2 my-2">
                <button
                    onClick={() => dispatch(setAuthState(true))}
                    className={`btn-1 bg-rose-800 text-white`}
                >
                    Login
                </button>

                <button
                    onClick={() => dispatch(setAuthState(false))}
                    className={`btn-1 bg-yellow-800 text-white`}
                >
                    Logout
                </button>
            </div>
        </section>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ params }) => {
            console.log("PARAMS in getSSProps: ", params);
            store.dispatch(setAuthState(!store.getState().auth.userActive));
            console.log("State on server:", store.getState());
            return {
                props: {
                    auth: null,
                },
            };
        }
);
