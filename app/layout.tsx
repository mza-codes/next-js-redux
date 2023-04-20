import Header from "../components/Header";
import Toast from "../components/Toast";
import "../styles/globals.css";
import { genTitle } from "../utils";

export const metadata = {
    title: genTitle("Home"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={``}>
                <Toast />
                <Header />
                <main className="app-page">{children}</main>
            </body>
        </html>
    );
}
