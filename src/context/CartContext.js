import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(() => {
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (savedCartItems) {
            return savedCartItems.map(item => ({
                ...item,
                quantity: item.quantity || 1,
            }));
        }
        return [];
    });


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItem));
    }, [cartItem]);

    // Add item to the cart
    const addToCart = (product) => {
        const itemExists = cartItem.find(item => item.id === product.id);
        if (itemExists) {
            setCartItem(prev =>
                prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItem(prev => [
                ...prev,
                { ...product, quantity: 1 }
            ]);
        }
    };

    // Remove item from the cart
    const removeFromCart = (id) => {
        setCartItem(prev => prev.filter(item => item.id !== id));
    };

    // Update item quantity
    const updateQuantity = (id, quantity) => {
        const validQuantity = quantity < 1 ? 1 : quantity;
        setCartItem(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: validQuantity } : item
            )
        );
    };

    const emptyCart = () => {
        setCartItem([]);
    };

    const cartCount = cartItem.reduce((total, item) => total + item.quantity, 0);


    return (
        <CartContext.Provider value={{ cartItem, addToCart, removeFromCart, updateQuantity, emptyCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
