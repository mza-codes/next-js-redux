export default function Header() {
    return (
        <header className="h-[80px] w-full z-50 flex items-center justify-between p-2 bg-gray-400">
            <img
                src="/mFlux_logo.png"
                alt="mflux_logo"
                width={120}
                height={60}
            />
            <div className="input-box">
                <input type="text" className="input-field" />
            </div>
        </header>
    );
}
