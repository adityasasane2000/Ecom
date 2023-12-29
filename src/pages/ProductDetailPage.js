import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";

let ProductDetailPage = () => {
    return (
        <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
        </div>
    )
}

export default ProductDetailPage;