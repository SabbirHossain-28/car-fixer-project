import product1 from "../../assets/images/products/1.png";
import product2 from "../../assets/images/products/2.png";
import product3 from "../../assets/images/products/3.png";
import product4 from "../../assets/images/products/4.png";
import product5 from "../../assets/images/products/5.png";
import product6 from "../../assets/images/products/6.png";
import ProductCard from "./ProductCard";
const Products = () => {
    const products=[
        {
            "img":product1,
            "product_name":"Hydrolic Break",
            "price":"200.00",
            "rating":"5.00",
        },
        {
            "img":product2,
            "product_name":"Car Suspension with Break",
            "price":"150.00",
            "rating":"5.00",
        },
        {
            "img":product3,
            "product_name":"Engine Air Filter",
            "price":"350.00",
            "rating":"5.00",
        },
        {
            "img":product4,
            "product_name":"Battery",
            "price":"550.00",
            "rating":"5.00",
        },
        {
            "img":product5,
            "product_name":"Car Tyre",
            "price":"250.00",
            "rating":"4.00",
        },
        {
            "img":product6,
            "product_name":"Car Engine Plug",
            "price":"250.00",
            "rating":"5.00",
        },
    ]
    return (
        <div className="mt-12">
            <div className="text-center space-y-2 mb-10">
                <h4 className="text-xl text-[#FF3811] font-bold">Popular Products</h4>
                <h2 className="text-4xl text-[#151515] font-bold">Browse Our Products</h2>
                <p className="text-sm text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    products.map((product,idx)=><ProductCard key={idx} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;