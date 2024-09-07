import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import withLayout from "./components/Layout/withLayout";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import Blogs from "./components/Blogs/Blogs";
import Custom from "./components/Custom/Custom";
import Categories from "./components/Categories/Categories";

const LoginWithLayout = withLayout(Login);
const SignUpWithLayout = withLayout(Signup);
const ProductListWithLayout = withLayout(ProductList);
const CartWithLayout = withLayout(Cart);
const HomeWithLayout = withLayout(HomePage);

const CheckOutWithLayout = withLayout(CheckOut);
const BlogWithLayout = withLayout(Blogs);
const CustomWithLayout = withLayout(Custom);
const CategoriesWithLayout = withLayout(Categories);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginWithLayout />} />
                <Route path="/" element={<HomeWithLayout />} />
                <Route path="/signup" element={<SignUpWithLayout />} />
                <Route path="/products" element={<ProductListWithLayout />} />
                <Route path="/cart" element={<CartWithLayout />} />
                <Route path="/blog" element={<BlogWithLayout />} />
                <Route path="/custom" element={<CustomWithLayout />} />
                <Route path="/categories" element={<CategoriesWithLayout />} />
                <Route path="/home" element={<HomeWithLayout />} />

                <Route
                    path="/checkout"
                    element={
                        <PrivateRoute>
                            <CheckOutWithLayout />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
