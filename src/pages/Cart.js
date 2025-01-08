import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cartItem, removeFromCart, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    const handleQuantityChange = (id, quantity) => {
        const parsedQuantity = parseInt(quantity, 10);
        if (parsedQuantity < 1) return;
        updateQuantity(id, parsedQuantity);
    };

    const handleContinueShopping = () => {
        navigate("/");
    };

    const handleCheckOut = () => {
        navigate("/checkout");
    };

    return (
        <div className="bg-gray-100 py-10 min-h-screen mt-12">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Shopping Cart</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Cart Items Section */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-2/3">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm">
                                    <tr>
                                        <th className="py-3 px-4">Product</th>
                                        <th className="py-3 px-4">Quantity</th>
                                        <th className="py-3 px-4">Price</th>
                                        <th className="py-3 px-4">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 text-sm md:text-base">
                                    {cartItem.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="text-center text-black py-6">
                                                Your cart is empty.
                                            </td>
                                        </tr>
                                    ) : (
                                        cartItem.map((item) => (
                                            <tr key={item.id} className="border-b">
                                                <td className="py-4 px-4">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-12 h-12 md:w-16 md:h-16 rounded-lg mr-4"
                                                        />
                                                        <p className="font-medium">{item.name}</p>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4">
                                                    <input
                                                        type="number"
                                                        className="w-12 md:w-16 text-center border border-gray-300 rounded"
                                                        min="1"
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            handleQuantityChange(item.id, e.target.value)
                                                        }
                                                    />
                                                </td>
                                                <td className="py-4 px-4">${item.price * item.quantity}</td>
                                                <td className="py-4 px-4">
                                                    <button
                                                        onClick={() => handleRemoveFromCart(item.id)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 w-full lg:w-1/3">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2 md:mb-4">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-medium">
                                ${cartItem.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-between mb-2 md:mb-4">
                            <p className="text-gray-600">Tax</p>
                            <p className="font-medium">$5.00</p>
                        </div>
                        <div className="flex justify-between border-t pt-2 md:pt-4">
                            <p className="text-lg font-bold">Total</p>
                            <p className="text-lg font-bold">
                                $
                                {(
                                    cartItem.reduce((total, item) => total + item.price * item.quantity, 0) + 5.0
                                ).toFixed(2)}
                            </p>
                        </div>
                        <button
                            onClick={handleCheckOut}
                            className="bg-blue-500 text-white w-full py-2 mt-4 md:mt-6 rounded hover:bg-blue-600"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={handleContinueShopping}
                            className="text-blue-500 w-full py-2 mt-2 rounded hover:underline"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
