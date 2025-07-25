import { useEffect } from 'react';
import InstagramCard from './InstagramCard';

const instagramPosts = [
    "https://www.instagram.com/reel/DFne83XS-Iw/",
    "https://www.instagram.com/reel/DEDAE26yKbD/",
    "https://www.instagram.com/reel/DB1gtoJSOCG/"
];

export default function CustomerFeedback() {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section style={{ backgroundColor: "#f9fafb", padding: "4rem 0" }}>
            <div className="container">
                <h2
                    className="text-center mb-5"
                    style={{
                        fontSize: "2.25rem",
                        fontWeight: "700",
                        color: "#1a1a1a",
                        marginBottom: "3rem",
                    }}
                >
                    What our customers say
                </h2>
                <div className="row g-4 justify-content-center">
                    {instagramPosts.map((url, index) => (
                        <div className="col-sm-10 col-md-6 col-lg-4" key={index}>
                            <InstagramCard url={url} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};