import "../styles/globals.css";

export const metadata = {
    default: "Lok-D",
    title: "%s | Lok-D",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className="app-page">
                    {/* Header */}

                    {children}

                    {/* Footer */}
                </main>
            </body>
        </html>
    );
}
