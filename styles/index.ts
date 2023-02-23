export const styles = {
    grid_container: {
        margin: 0,
        padding: 0,
        width: "80vw",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 250px)",
        gridAutoRows: "10px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        justifyContent: "center",
    },
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: "span 26",
    },
    medium: {
        gridRowEnd: "span 33",
    },
    large: {
        gridRowEnd: "span 45",
    },
} as const;

const sizes = ["span 38", "span 26", "span 33", "span 45"] as const;
