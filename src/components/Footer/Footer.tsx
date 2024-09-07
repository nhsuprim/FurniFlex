import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import icon from "../images/icon.png";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="container mx-auto p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:justify-between pb-8">
                    <aside className="flex items-center mb-6 lg:mb-0">
                        <img
                            src={icon}
                            alt="FurniFlex logo"
                            className="w-12 h-12 mr-4"
                        />
                        <span className="text-lg">
                            Furni<span className="text-[#1E99E5]">Flex</span>
                        </span>
                    </aside>
                    <nav className="mb-6 lg:mb-0">
                        <h6 className="text-white text-xl pb-2">About Us</h6>
                        <a className="block text-stone-400 hover:text-white">
                            Master Plan
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Jobs
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Invest
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Pressroom
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Blog
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Contact
                        </a>
                    </nav>
                    <nav className="mb-6 lg:mb-0">
                        <h6 className="text-white text-xl pb-2">
                            Explore EEVE
                        </h6>
                        <a className="block text-stone-400 hover:text-white">
                            Unlock My Robot Power
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Straight
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Robot Platform
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            EEVE Roadmap
                        </a>
                    </nav>
                    <nav>
                        <h6 className="text-white text-xl pb-2">
                            Community & Support
                        </h6>
                        <a className="block text-stone-400 hover:text-white">
                            Willow X Community
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Developer & Maker Access
                        </a>
                        <a className="block text-stone-400 hover:text-white">
                            Special Cases
                        </a>
                    </nav>
                </div>

                <hr className="border-t border-stone-400 mb-8" />

                <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-8">
                    <div className="flex gap-4 mb-4 lg:mb-0">
                        <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                        <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
                        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
                    </div>
                    <div className="flex gap-4 text-stone-400 mb-4 lg:mb-0">
                        <p className="cursor-pointer hover:text-white">
                            March22 Recap
                        </p>
                        <p className="cursor-pointer hover:text-white">
                            Privacy Policy
                        </p>
                        <p className="cursor-pointer hover:text-white">
                            General Terms
                        </p>
                        <p className="cursor-pointer hover:text-white">
                            Contact
                        </p>
                    </div>
                    <div className="text-stone-400 mb-4 lg:mb-0">
                        United States (English)
                    </div>
                </div>
                <p className="text-center text-stone-400">
                    EEVE © 2024. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
