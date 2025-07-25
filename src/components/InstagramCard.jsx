export default function InstagramCard({ url }) {
    return (
        <div
            className="instagram-card"
            style={{
                borderRadius: "20px",
                background: "#fff",
                padding: "1.5rem",
                boxShadow: "0 12px 24px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
                height: "100%",
            }}
        >
            <blockquote
                className="instagram-media w-100"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    border: 0,
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    background: "transparent",
                    minWidth: 300,
                }}
            ></blockquote>
        </div>
    );
};