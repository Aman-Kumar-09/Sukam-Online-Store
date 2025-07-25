import React from 'react';

const brands = [
    { name: 'Powerlook', image: '/images/powerlook.png' },
    { name: 'Fuaark', image: '/images/fuaark.png' },
    { name: 'Fugazee', image: '/images/fugaazee.jpg' },
    { name: 'Snitch', image: '/images/Snitch.png' },
    { name: 'Soul', image: '/images/soul.png' },
];

export default function BrandsSection() {
    return (
        <section className="brands-section py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-4">Trusted Brands, Trusted Style</h2>
                <div className="row justify-content-center align-items-center text-center g-4">
                    {brands.map((brand, index) => (
                        <div key={index} className="col-6 col-sm-4 col-md-2">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="img-fluid brand-logo"
                                style={{ maxHeight: '60px', transition: 'transform 0.3s ease' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};