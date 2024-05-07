import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import PromotionModal from "./PromotionModal";
import CategoryModal from "./CategoryModal";
import Cart from "./Cart";

export default function Navbar({ title, props }) {
    const { data, setData, get, reset } = useForm({
        search: "",
    });
    const [promotion, setPromotion] = useState(false);
    const showPromotion = () => {
        setPromotion(!promotion);
    };
    const [category, setCategory] = useState(false);
    const showCategory = () => {
        setCategory(!category);
    };

    const changeHandler = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        get(route("homepage"));
    };
    return (
        <div className="bg-[#7a8ee0]">
            {/* Promotion Modal */}
            {promotion && <PromotionModal trigger={setPromotion} />}
            {/* End Of Modal */}

            {/* Category Modal */}
            {category && (
                <CategoryModal categories={props} trigger={setCategory} />
            )}
            {/* End Of Category Modal */}
            <Head title={title} />
            <div className="flex container justify-around gap-x-8 py-4 px-8 mx-auto items-center text-white">
                <div className="text-2xl flex items-center">
                    <Link href={route("homepage")}>
                        <span>San</span>
                        <span className="bg-white text-[#7a8ee0] py-1 px-2 rounded-md">
                            Store
                        </span>
                    </Link>
                </div>
                <div>
                    <button
                        onClick={showCategory}
                        className="flex items-center gap-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        Kategori
                    </button>
                </div>
                <form onSubmit={handleSearch} className="w-full">
                    <input
                        className="py-2 px-4 w-full text-black border-none focus:ring focus:ring-violet-500 rounded-md"
                        type="text"
                        name="search"
                        value={data.search}
                        onChange={changeHandler}
                        placeholder="Cari produk"
                    />
                </form>
                <div className="flex justify-around gap-x-6 items-center">
                    <button onClick={showPromotion}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                        </svg>
                    </button>
                    <div className="flex items-center gap-x-2">
                        <Link href={route("login")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </Link>
                    </div>
                    <Cart />
                </div>
            </div>
        </div>
    );
}
