import Toast from "../components/Toast";
import "../styles/globals.css";
import { genTitle } from "../utils";
import { Urbanist } from "next/font/google";

export const metadata = {
    title: genTitle("Home"),
};

const nunito = Urbanist({
    display: "swap",
    preload: true,
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={``}>
                <Toast />
                <main className="app-page">{children}</main>
            </body>
        </html>
    );
}
