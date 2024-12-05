import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const SingleProduct = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const { product: products, loading, error } = useContext(ProductContext);
    const [quantity, setQuantity] = useState(1);

    if (loading) {
        return <p className="text-center text-gray-700 mt-10">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
    }

    const product = products?.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p className="text-center text-gray-700 mt-10">Product not found.</p>;
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value > 0) setQuantity(value);
    };

    const relatedProducts = products?.filter(
        (item) => item.category === product.category && item.id !== product.id
    );

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Main Product */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full md:w-96 rounded-lg shadow-md"
                    />
                </div>

                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-bold text-gray-800 mb-6">${product.price}</p>

                    <div className="flex items-center gap-4 mb-6">
                        <label htmlFor="quantity" className="text-gray-600">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            className="w-16 text-center border border-gray-300 rounded"
                            value={quantity}
                            min="1"
                            onChange={handleQuantityChange}
                        />
                    </div>

                    <div className='w-full '>
                        <button
                            onClick={handleAddToCart}
                            className='bg-[#2d6b95] px-3 py-2 rounded-xl font-bold text-white hover:text-[#00246B] hover:bg-[#CADCFC]'
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-16">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {relatedProducts?.length > 0 ? (
                        relatedProducts.map((related) => (
                            <div key={related.id} className="border rounded-lg shadow p-4">
                                <Link to={`/product/${related.id}`}>
                                    <img
                                        src={related.image}
                                        alt={related.title}
                                        className="w-full h-48 object-cover rounded"
                                    />
                                </Link>
                                <h3 className="text-lg font-semibold mt-2">{related.title}</h3>
                                <p className='font-semibold text-red-500 text-center'>${related.price}</p>
                                <div className='w-full justify-center flex *:m-4'>
                                    <button
                                        onClick={() => addToCart(related)}
                                        className='bg-[#2d6b95] px-3 py-2 rounded-xl font-bold text-white hover:text-[#00246B] hover:bg-[#CADCFC]'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No related products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
