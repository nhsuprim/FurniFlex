import React, { useState, useEffect } from "react";
import { useCart } from "../../contextApi/CartContext";
import { useAuth } from "../../contextApi/AuthContext";

const CheckOut = () => {
    const { cart, getTotalPrice } = useCart();
    const { user, isAuthenticated } = useAuth();

    // State for address form
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
    });

    // State for dynamic calculations
    const [shippingFee, setShippingFee] = useState(0);
    const [tax, setTax] = useState(0);

    useEffect(() => {
        if (isAuthenticated && user) {
            setFormData({
                name: `${user.firstName || ""} ${user.lastName || ""}`,
                address: "",
                city: "",
                state: "",
                postalCode: "",
                country: "",
            });
        }
    }, [isAuthenticated, user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const calculateShippingFee = () => {
        setShippingFee(5.0);
    };

    const calculateTax = () => {
        const totalPrice = getTotalPrice();
        setTax(totalPrice * 0.07);
    };

    const handleCheckout = () => {
        calculateShippingFee();
        calculateTax();

        console.log("Form Data:", formData);
        console.log("Shipping Fee:", shippingFee);
        console.log("Tax:", tax);
        console.log("Total Price:", getTotalPrice() + shippingFee + tax);
        // router.push("/payment"); // Assuming you have a payment page
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Order Summary */}
                <div className="w-full lg:w-2/3">
                    <h6 className="font-bold mb-6 text-2xl">Order Summary</h6>
                    {cart.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col lg:flex-row items-center border p-4 rounded-md shadow-sm"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-md mb-4 lg:mb-0 lg:mr-4"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            {item.name}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {item.discountPercentage}% off
                                        </p>
                                        <div className="flex items-center space-x-4 mt-2">
                                            <span className="font-semibold">
                                                Quantity: {item.quantity}
                                            </span>
                                            <span className="font-semibold">
                                                ${item.totalPrice.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-slate-50 p-4 font-light border border-gray-100 mt-6 rounded-md">
                                <div className="flex justify-between items-center mb-2">
                                    <span>Subtotal</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span>Shipping</span>
                                    <span>${shippingFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span>Estimated Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <hr className="my-4 border-gray-200" />
                                <div className="flex justify-between items-center font-bold">
                                    <span>Total</span>
                                    <span>
                                        $
                                        {(
                                            getTotalPrice() +
                                            shippingFee +
                                            tax
                                        ).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Shipping Address */}
                <div className="w-full lg:w-1/3">
                    <h6 className="font-bold mb-6 text-2xl">
                        Shipping Address
                    </h6>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handleCheckout}
                            className="btn btn-primary bg-black text-white w-full mt-4 uppercase"
                        >
                            Proceed to Checkout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
