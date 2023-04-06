import "../styles/globals.css";
import { genTitle } from "../utils";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: genTitle("Home"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                    containerClassName="capitalize truncate"
                    toastOptions={{ duration: 4600 }}
                    gutter={4}
                />
                <main className="app-page">{children}</main>
            </body>
        </html>
    );
}
