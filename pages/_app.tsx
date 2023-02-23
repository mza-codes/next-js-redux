import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store, wrapper } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <main className="app-page">
                <Component {...pageProps} />
            </main>
        </Provider>
    );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
// export default wrapper.useWrappedStore(MyApp);
