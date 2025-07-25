import ProductCard from './ProductCard';

export default function ProductGrid({ title, products }) {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="title mb-4 text-center fw-bold fs-3">{title}</h2>
                <div className="row g-4">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};