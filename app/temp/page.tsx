export const metadata = {
    title: "Temp",
};

export default function TempPage() {
    const auth = false;

    return (
        <section>
            <div className="bg-green-300 font-medium p-3 rounded-lg">
                <center>{auth ? "Logged IN" : "Inactive Session"}</center>
            </div>
            <div className="flex flex-row items-center gap-2 my-2">
                <button className={`btn-1 bg-rose-800 text-white`}>
                    Login
                </button>

                <button className={`btn-1 bg-yellow-800 text-white`}>
                    Logout
                </button>
            </div>
        </section>
    );
}
