import "../styles/globals.css";
import { genTitle } from "../utils";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <main className="app-page">{children}</main>
            </body>
        </html>
    );
}
