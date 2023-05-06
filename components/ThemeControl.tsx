import { useCallback, useRef, useState } from "react";
import { IoMdColorPalette } from "react-icons/io";
import { themes } from "../contstants";

export default function ThemeControl() {
    const clickRef = useRef(0);
    const page = document.documentElement;
    const [theme, setTheme] = useState(localStorage.getItem("app-theme") ?? "");

    const changeTheme = (n: number) => {
        page.classList.replace(page.classList[0], themes[n]);
        localStorage.setItem("app-theme", themes[n]);
        setTheme(themes[n]);
    };

    const randomizeTheme = useCallback(() => {
        clickRef.current += 1;
        if (clickRef.current === themes.length) clickRef.current = 0;
        changeTheme(clickRef.current);
    }, []);

    return (
        <div className="inline-flex flex-wrap gap-2 items-center font-semibold">
            Change Theme:
            <select
                value={themes.indexOf(theme) + 1}
                onChange={(e) => {
                    changeTheme(+e.target.value - 1);
                }}
                className="py-1 px-3 my-2 text-sm bg-gray-200 outline-none rounded-lg text-gray-800 capitalize"
            >
                {themes.map((th, i) => (
                    <option
                        key={th}
                        value={i + 1}
                        className={`${
                            th === theme ? "bg-green-400 py-2 my-2 font-extrabold" : ""
                        }`}
                    >
                        {th}
                    </option>
                ))}
            </select>
            <button
                title="Random"
                className="text-green-500 hover:text-green-600 p-2"
                onClick={randomizeTheme}
            >
                <IoMdColorPalette size={28} />
            </button>
        </div>
    );
}
