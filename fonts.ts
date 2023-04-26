import { Nunito, Righteous } from "next/font/google";

export const nunito = Nunito({
    display: "swap",
    preload: true,
    subsets: ["latin"],
    weight: ["400", "400", "500", "600", "700", "800", "900"],
    variable: "--nunito",
});

export const righteous = Righteous({
    display: "swap",
    subsets: ["latin"],
    weight: ["400"],
    preload: true,
});
