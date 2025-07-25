import model from "/images/cover.jpg";

export default function Hero() {
    return (
        <section className="hero-section py-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h1 className="hero-title mb-3">Wear the Trend, <br /> Own the Moment!</h1>
                        <p className="hero-description mb-4">
                            Fashion isn't just what you wear—it's how you own it. Step into the latest trends, embrace your unique style, and make every moment a statement.
                        </p>
                        <a href="#" className="btn btn-primary rounded-pill px-4 py-2 shadow-lg">Explore Now &#8594;</a>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src={model} alt="model" className="img-fluid hero-image rounded-3 shadow-lg transform-hover" />
                    </div>
                </div>
            </div>
        </section>
    );
};