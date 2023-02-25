type Props = {};

export default function LoaderPlaceHolder({}: Props) {
    return (
        <section className="flex fixed z-50 bg-black bg-opacity-50 min-h-screen w-full items-center justify-center">
            <div
                role="status"
                className="space-y-2.5 animate-pulse max-w-[90vw]"
            >
                <div className="flex items-center w-full space-x-2">
                    <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-24"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-24"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[400px]">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-80"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-24"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[440px]">
                    <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-24"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[360px]">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-80"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                </div>
            </div>
        </section>
    );
}
