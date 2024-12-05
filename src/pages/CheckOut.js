import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; // Adjust the path as necessary
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutForm = () => {
    const { cartItem, emptyCart } = useContext(CartContext);
    const [isShippingDifferent, setIsShippingDifferent] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);

    // Calculate total amount from cart items
    const totalAmount = cartItem.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Handle toggling the shipping address
    const handleShippingToggle = () => {
        setIsShippingDifferent(!isShippingDifferent);
    };

    // Handle account creation toggle
    const handleCreateAccountToggle = () => {
        setCreateAccount(!createAccount);
    };


    const handlePaymentSuccess = (details, data) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
        console.log("Transaction Details:", details, data);
        emptyCart();
    };

    // Initial PayPal options
    const initialPayPalOptions = {
        "client-id": "AZsg0CU6mNHveGmpF90bMucCtWGs2ZKPUKg7B2iQzzFYvQoYcH2p_L_MREqXMJgYPtjeZ43Fq11uDhIf",
        currency: "USD",
    };

    return (
        <div>
            {/* Page Header */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <p className="text-xl text-gray-500">Fresh and Organic</p>
                    <h1 className="text-4xl font-extrabold text-gray-900">Check Out Product</h1>
                </div>
            </div>

            {/* Checkout Section */}
            <div className="checkout-section mt-16 mb-24 z-0">
                <div className="container mx-auto flex flex-wrap">
                    {/* Billing Details */}
                    <div className="w-full md:w-1/2 px-4">
                        <section className="mb-6">
                            <h4 className="text-xl font-semibold">Billing Details</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md" id="firstName" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md" id="lastName" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-md" id="company" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address *</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-md" id="address" placeholder="House number and street name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Town/City *</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-md" id="city" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                                <input type="email" className="w-full p-3 border border-gray-300 rounded-md" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                                <input type="tel" className="w-full p-3 border border-gray-300 rounded-md" id="phone" required />
                            </div>
                            <div className="flex items-center mb-3">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                    id="createAccount"
                                    checked={createAccount}
                                    onChange={handleCreateAccountToggle}
                                />
                                <label className="ml-2 text-sm text-gray-700" htmlFor="createAccount">Create an account?</label>
                            </div>
                            {createAccount && (
                                <div className="mb-3">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Account Password *</label>
                                    <input type="password" className="w-full p-3 border border-gray-300 rounded-md" id="password" required />
                                </div>
                            )}
                        </section>

                        {/* Shipping Details */}
                        <section>
                            <div className="flex items-center mb-3">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                    id="differentShipping"
                                    checked={isShippingDifferent}
                                    onChange={handleShippingToggle}
                                />
                                <label className="ml-2 text-sm text-gray-700" htmlFor="differentShipping">Ship to a different address?</label>
                            </div>
                            {isShippingDifferent && (
                                <div>
                                    <h4 className="text-xl font-semibold">Shipping Details</h4>
                                    <div className="mb-3">
                                        <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-700">Street Address *</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md" id="shippingAddress" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="shippingCity" className="block text-sm font-medium text-gray-700">Town/City *</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md" id="shippingCity" required />
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="bg-white p-5 border rounded-md shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Order</h2>
                            <table className="table-auto w-full mb-4">
                                <thead>
                                    <tr>
                                        <th className="text-left text-sm font-medium text-gray-600">Product</th>
                                        <th className="text-right text-sm font-medium text-gray-600">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItem.map((item) => (
                                        <tr key={item.id}>
                                            <td className="text-left">{item.title} <strong className="mx-2">x</strong> {item.quantity}</td>
                                            <td className="text-right">${(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="font-medium">Subtotal</td>
                                        <td className="font-medium text-right">${totalAmount.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium">Shipping</td>
                                        <td className="font-medium text-right">$50.00</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Order Total</td>
                                        <td className="font-semibold text-right">${(totalAmount + 50).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* PayPal Payment Section */}
                            <div className="paypal-container relative z-10">  {/* Adjust z-index as needed */}
                                <PayPalScriptProvider options={initialPayPalOptions}>
                                    <PayPalButtons
                                        style={{ layout: "vertical" }}
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: (totalAmount + 50).toFixed(2),
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                handlePaymentSuccess(details, data);
                                            });
                                        }}
                                        onError={(err) => {
                                            console.error("PayPal Checkout Error:", err);
                                        }}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
