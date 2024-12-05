import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const { product: products, error, loading } = useContext(ProductContext); // Rename `product` to `products` for clarity
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product);
        console.log(`Added to cart:`, product);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <h1 className=' text-center p-2 text-3xl md:text-4xl font-bold underline-offset-8'>
                Featured Products
            </h1>
            <div className='container mx-auto'>
                <div className="mb-10 mt-10">
                    <div className='p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {products && products.length > 0 ? (
                            products.slice(0, 8).map((prod) => (
                                <div key={prod.id} className='p-2 rounded-2xl h-auto bg-white border shadow-lg'>
                                    <Link to={`/product/${prod.id}`}>
                                        <img src={prod.image} alt={prod.title} className='w-full h-[380px] mx-auto' />
                                    </Link>
                                    <h1 className='text-center font-bold'>{prod.title}</h1>
                                    <p className='font-semibold text-red-500 text-center'>{prod.price}$</p>
                                    <div className='w-full justify-center flex'>
                                        <button
                                            className='bg-[#2d6b95] px-3 py-2 rounded-xl font-bold text-white hover:text-[#00246B] hover:bg-[#CADCFC]'
                                            onClick={() => handleAddToCart(prod)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products available.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSection;
