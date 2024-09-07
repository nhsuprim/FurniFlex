import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../contextApi/CartContext";
import { useAuth } from "../../contextApi/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import icon from "../images/icon.png";

const Navbar = () => {
    const { getTotalQuantity } = useCart();
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <div className="bg-white shadow-lg sticky top-0 z-50">
            <div className="navbar container mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/products"
                                    className="hover:bg-gray-100"
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/categories"
                                    className="hover:bg-gray-100"
                                >
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/custom"
                                    className="hover:bg-gray-100"
                                >
                                    Custom
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className="hover:bg-gray-100"
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <Link
                        to="/"
                        className="flex items-center space-x-2 text-2xl font-bold"
                    >
                        <img src={icon} alt="logo" className="w-10 h-10" />
                        <span>
                            Furni<span className="text-blue-500">Flex</span>
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-8">
                        <li>
                            <NavLink
                                to="/home"
                                className="px-3 py-2 hover:text-blue-500"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className="px-3 py-2 hover:text-blue-500"
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/categories"
                                className="px-3 py-2 hover:text-blue-500"
                            >
                                Categories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/custom"
                                className="px-3 py-2 hover:text-blue-500"
                            >
                                Custom
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className="px-3 py-2 hover:text-blue-500"
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center space-x-4">
                    <NavLink to="/cart" className="relative flex items-center">
                        <FaShoppingCart className="text-xl" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {getTotalQuantity()}
                        </span>
                    </NavLink>

                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-lg font-semibold text-gray-700">
                                Hello, {user?.firstName}
                            </span>
                            <button
                                onClick={logout}
                                className="btn btn-error btn-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex space-x-4">
                            <Link
                                to="/login"
                                className="btn btn-primary btn-sm"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
