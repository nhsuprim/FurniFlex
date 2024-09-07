// src/components/ProductCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { IProduct, useProduct } from "../../contextApi/ProductContext";
import { useCart } from "../../contextApi/CartContext";

const ProductCarousel: React.FC = () => {
    const { products } = useProduct();
    const { addToCart } = useCart();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-8">
                Product Carousel
            </h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="p-4">
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {product.description}
                                </p>
                                <div className="flex justify-between mt-2">
                                    <span className="text-lg line-through">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="text-lg font-bold text-red-500">
                                        $
                                        {calculateDiscountedPrice(
                                            product.price,
                                            product.discountPercentage
                                        ).toFixed(2)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Discount: {product.discountPercentage}%
                                </p>
                                <div className="card-actions mt-4 justify-end">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

const calculateDiscountedPrice = (
    price: number,
    discountPercentage: number
) => {
    return price - price * (discountPercentage / 100);
};

export default ProductCarousel;
