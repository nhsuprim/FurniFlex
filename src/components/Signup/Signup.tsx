import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contextApi/AuthContext";
import image from "../images/chris-lee-70l1tDAI6rM-unsplash 1@2x.png";
import google from "../images/icons8-google 1.png";
import apple from "../images/icons8-apple-logo 1.png";
import icon from "../images/icon.png";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        if (agreedToTerms) {
            signup(firstName, lastName, email, password);
            navigate("/login");
        } else {
            alert("You must agree to the terms and policy.");
        }
    };

    return (
        <div className="container mx-auto font-barlow px-4">
            <div className="flex flex-col lg:flex-row w-full items-center justify-center min-h-screen shadow-md rounded-lg overflow-hidden gap-8 lg:gap-16 ">
                <div className="w-full lg:w-1/2 px-6 lg:px-20 py-10 lg:py-16 bg-white font-medium">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        Welcome To
                    </h2>
                    <h1 className="text-center text-4xl font-bold mb-4">
                        Furni <span className="text-[#1E99E5]">Flex</span>
                    </h1>
                    <p className="text-gray-600 font-medium mb-10 text-center">
                        Signup for purchase your desire products
                    </p>

                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={agreedToTerms}
                                onChange={(e) =>
                                    setAgreedToTerms(e.target.checked)
                                }
                                id="terms"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-600"
                            >
                                I agree to the{" "}
                                <p className="text-blue-600 hover:underline">
                                    Terms & Policy
                                </p>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <button className="flex items-center justify-center w-full lg:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 gap-2">
                            <img
                                src={google}
                                className="w-6 h-6"
                                alt="Google Logo"
                            />
                            <span>Sign up with Google</span>
                        </button>

                        <button className="flex items-center justify-center w-full lg:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 gap-2">
                            <img
                                src={apple}
                                className="w-6 h-6"
                                alt="Apple Logo"
                            />
                            <span>Sign up with Apple</span>
                        </button>
                    </div>

                    <p className="mt-6 text-center">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 hover:underline"
                        >
                            Log in
                        </Link>
                    </p>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <img
                        src={image}
                        alt="Signup illustration"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 px-6 lg:px-0">
                        <img src={icon} alt="Icon" className="w-16 h-16 mb-4" />
                        <h1 className="text-white text-4xl font-bold mb-4">
                            Furni <span className="text-[#1E99E5]">Flex</span>
                        </h1>
                        <p className="text-gray-400 mt-4 max-w-xs font-[15px]">
                            Discover a seamless shopping experience with our
                            curated collection of products. From fashion to
                            electronics, we bring quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
