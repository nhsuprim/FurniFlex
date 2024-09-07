import React, { useState } from "react";
import { IProduct, useProduct } from "../../contextApi/ProductContext";
import { useCart } from "../../contextApi/CartContext";
import { toast } from "react-toastify";

const ProductList: React.FC = () => {
    const { products } = useProduct();
    const { cart, addToCart } = useCart();

    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const calculateDiscountedPrice = (
        price: number,
        discountPercentage: number
    ) => {
        return price - price * (discountPercentage / 100);
    };

    const isProductInCart = (productId: string) => {
        return cart.some((item) => item.id === productId);
    };

    const handleAddProductToCart = (product: IProduct) => {
        addToCart(product);
        toast(<p className="font-semibold">Added to the cart</p>);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const categories = Array.from(
        new Set(products.map((product) => product.category))
    );

    return (
        <div className="container mx-auto  sm:inline-block md:flex justify-center mt-6 ">
            <div className="md:w-1/4 ">
                <ul className="space-y-2 px-12">
                    {categories.map((category) => (
                        <li
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`cursor-pointer w-full
                                 px-4 py-2 rounded-lg ${
                                     selectedCategory === category
                                         ? "bg-black text-white"
                                         : " text-gray-600 font-medium"
                                 }`}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="card w-full bg-base-100 shadow-xl"
                        >
                            <figure>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    className="object-cover "
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {product.description}
                                </p>
                                <div className="flex justify-between items-center gap-4 mt-2">
                                    <span className=" font-bold text-black-500">
                                        $
                                        {calculateDiscountedPrice(
                                            product.price,
                                            product.discountPercentage
                                        ).toFixed(2)}
                                    </span>
                                    <span className=" text-gray-400 text-center line-through">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <p className=" text-end font-semibold text-red-500">
                                        {product.discountPercentage}% OFF
                                    </p>
                                </div>

                                <div className="card-actions mt-4 justify-end">
                                    <button
                                        className="btn btn-primary bg-black text-white w-full"
                                        onClick={() =>
                                            handleAddProductToCart(product)
                                        }
                                        disabled={isProductInCart(product.id)}
                                    >
                                        {isProductInCart(product.id)
                                            ? "Added to Cart"
                                            : "Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
