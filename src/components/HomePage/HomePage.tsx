import React from "react";
import Slider from "react-slick";
import image1 from "../images/img/image 147.png";
import image2 from "../images/img/image 148.png";
import image3 from "../images/img/image 149.png";
import { Link } from "react-router-dom";
import { useProduct } from "../../contextApi/ProductContext";

const HomePage: React.FC = () => {
    const { products } = useProduct();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Get the first three products from the products array
    const topThreeProducts = products.slice(0, 3);

    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4">
                <div className="py-16">
                    <div className="flex flex-wrap items-center bg-gray-50">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="p-8">
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                                    Discover Our{" "}
                                    <span className="text-[#1E99E5]">
                                        Latest
                                    </span>{" "}
                                    Products
                                </h1>
                                <p className="text-base md:text-lg text-gray-600">
                                    Check out our latest collection of amazing
                                    products. Don’t miss out on special offers
                                    and discounts.
                                </p>
                                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <Link to="/products">Shop Now!!</Link>
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <div className="overflow-hidden">
                                <Slider {...settings}>
                                    <div className="flex justify-center">
                                        <img
                                            src={image1}
                                            alt="Product 1"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src={image2}
                                            alt="Product 2"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src={image3}
                                            alt="Product 3"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center ">
                        <h2 className="text-2xl font-bold mb-8">
                            Top Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {topThreeProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="border p-4 rounded-lg mx-auto "
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        className="object-cover "
                                    />
                                    <h3 className="text-xl font-bold mb-2">
                                        {product.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="btn btn-primary bg-black text-white px-10">
                            <Link to="/products">View All</Link>
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
