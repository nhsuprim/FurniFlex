import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contextApi/AuthContext";
import image from "../images/chris-lee-70l1tDAI6rM-unsplash 1@2x.png";
import google from "../images/icons8-google 1.png";
import apple from "../images/icons8-apple-logo 1.png";
import icon from "../images/icon.png";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
        navigate("/products");
    };

    return (
        <div className="container mx-auto font-barlow px-4">
            <div className="flex flex-col lg:flex-row w-full items-center justify-center min-h-screen shadow-md rounded-lg overflow-hidden gap-8 lg:gap-16">
                {/* Login Form Section */}
                <div className="w-full lg:w-1/2 px-6 lg:px-20 py-10 lg:py-16 bg-white font-medium">
                    <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                    <p className="text-gray-600 font-medium mb-10">
                        Enter your credentials to access your account
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
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
                            <div className="flex justify-end mt-2">
                                <span className="text-blue-600 font-semibold cursor-pointer">
                                    Forgot Password?
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-4 bg-black text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Sign in with Google */}
                        <button className="flex items-center justify-center w-full lg:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 gap-2">
                            <img
                                src={google}
                                className="w-6 h-6"
                                alt="Google Logo"
                            />
                            <span>Sign in with Google</span>
                        </button>

                        {/* Sign in with Apple */}
                        <button className="flex items-center justify-center w-full lg:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 gap-2">
                            <img
                                src={apple}
                                className="w-6 h-6"
                                alt="Apple Logo"
                            />
                            <span>Sign in with Apple</span>
                        </button>
                    </div>

                    <p className="mt-6 text-center">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                    <img
                        src={image}
                        alt="Login illustration"
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

export default Login;
