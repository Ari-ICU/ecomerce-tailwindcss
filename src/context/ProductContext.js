import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProduct = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            const filterCategory = data.filter(product => product.category === "women's clothing" || product.category === "men's clothing")
            setProduct(filterCategory);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <ProductContext.Provider value={{ product, error, loading, getProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
