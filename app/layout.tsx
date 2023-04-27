import Header from "../components/Header";
import UserModal from "../components/modals/UserModal";
import Toast from "../components/Toast";
import { nunito } from "../fonts";
import "../styles/globals.css";
import { genTitle } from "../utils";

export const metadata = {
    title: genTitle("Home"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Toast />
                <Header />
                <main className="app-page">{children}</main>
                <UserModal />
                {/* <ConfirmDialog /> */}
            </body>
        </html>
    );
}
