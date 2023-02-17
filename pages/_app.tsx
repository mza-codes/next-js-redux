import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="bg-gradient-to-br from-cyan-50 via-purple-100 to-indigo-300 min-h-screen w-full flex flex-col items-center justify-center">
            <Component {...pageProps} />
        </main>
    );
}

export default wrapper.withRedux(MyApp);
// export default wrapper.useWrappedStore(MyApp);
