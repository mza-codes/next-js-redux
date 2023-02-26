type Props = {
    loading: boolean;
};

function LoadBar({ loading }: Props) {
    if (loading)
        return (
            <div className="horizontal-bar-wrap">
                <div className="bar1 bar"></div>
            </div>
        );
    else return null;
}

export default LoadBar;
