import ProductGrid from './ProductGrid';
import featuredProducts from '../data/featuredProducts.json';
import latestProducts from '../data/latestProducts.json';

export default function Products() {
    return (
        <main id="products">
            <ProductGrid title="Featured Products" products={featuredProducts} />
            <ProductGrid title="Latest Products" products={latestProducts} />
        </main>
    );
};