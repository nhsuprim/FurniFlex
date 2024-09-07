import React from "react";
import { useCart } from "../../contextApi/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {
        cart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getTotalPrice,
    } = useCart();

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="col-span-1 lg:col-span-2">
                    <h6 className="font-bold mb-6 text-2xl">
                        An overview of your order
                    </h6>
                    {cart.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col lg:flex-row justify-between items-center border p-4 rounded-md shadow-sm"
                                >
                                    <div className="flex items-center space-x-4">
                                        {/* Product info */}
                                        <div>
                                            <h2 className="text-lg font-semibold">
                                                {item.name}
                                            </h2>
                                            <p className="text-sm text-gray-500">
                                                {item.discountPercentage}% off
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
                                        <div className="flex items-center">
                                            <button
                                                onClick={() =>
                                                    decrementQuantity(item.id)
                                                }
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                -
                                            </button>
                                            <span className="px-3">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    incrementQuantity(item.id)
                                                }
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="font-semibold">
                                            ${item.totalPrice.toFixed(2)}
                                        </p>
                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {/* Total Price */}
                        </div>
                    )}
                </div>

                {/* Order Details */}
                <div className="col-span-1 lg:col-span-1">
                    <h6 className="font-bold mb-6 text-2xl">Order Details</h6>
                    <div className="bg-slate-50 p-4 font-light border border-gray-100 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                            <span>Subtotal</span>
                            <span>${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span>Estimated Tax</span>
                            <span>€ -</span>
                        </div>
                        <hr className="my-4 border-gray-200" />
                        <div className="flex justify-between items-center font-bold">
                            <span>Total</span>
                            <span>${getTotalPrice().toFixed(2)}</span>
                        </div>
                    </div>
                    <Link to="/checkout">
                        <button className="btn btn-primary bg-black text-white w-full mt-4 uppercase">
                            Go to checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
