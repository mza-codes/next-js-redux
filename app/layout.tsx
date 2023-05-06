import AtomSideBar from "../components/AtomSideBar";
import ConfirmDialog from "../components/ConfirmDialog";
import Header from "../components/Header";
import AtomModal from "../components/modals/AtomModal";
import Toast from "../components/Toast";
import { nunito } from "../fonts";
import "../styles/globals.css";
import { genTitle } from "../utils";

export const metadata = {
    title: genTitle("Home"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="indigo">
            <body className={nunito.className}>
                <Toast />
                <Header />
                <main className="app-page">{children}</main>
                <ConfirmDialog />
                <AtomModal />
                <AtomSideBar />
            </body>
        </html>
    );
}
