import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthSate, setAuthState } from "../slices/authSlice";
import { wrapper } from "../store";

var btnCls =
    "bg-opacity-50 hover:bg-opacity-100 py-2 px-4 font-semibold rounded-md" as const;

const Home: NextPage = () => {
    // const authState = useSelector(selectAuthSate);
    const auth = useSelector((s: any) => s.auth.userActive);
    const dispatch = useDispatch();
    console.log("AUTH: ", auth);

    return (
        <section>
            <div className="bg-green-300 font-medium p-3 rounded-lg">
                <center>{auth ? "Logged IN" : "Inactive Session"}</center>
            </div>
            <div className="flex flex-row items-center gap-2 my-2">
                <button
                    onClick={() => dispatch(setAuthState(true))}
                    className={`${btnCls} bg-rose-800 text-white`}
                >
                    Login
                </button>

                <button
                    onClick={() => dispatch(setAuthState(false))}
                    className={`${btnCls} bg-yellow-800 text-white`}
                >
                    Logout
                </button>
            </div>
        </section>
    );
};

export default Home;
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ params }) => {
            console.log("PARAMS in getSSProps: ", params);
            await store.dispatch(
                setAuthState(!store.getState().auth.userActive)
            );
            console.log("State on server:", store.getState());
            return {
                props: {
                    authState: false,
                },
            };
        }
);
