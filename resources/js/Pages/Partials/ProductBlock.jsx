import { Link } from "@inertiajs/react";
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductBlock({ products }) {
    console.log("products", products);
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center py-2">
                <div className="flex items-center text-lg gap-x-1">
                    <span className="text-[#7a8ee0] font-semibold ">
                        Produk
                    </span>
                    <span>Terbaru</span>
                </div>
                <div className="flex items-center gap-x-4">
                    <button className="bg-[#7a8ee0] py-2 px-4 flex items-center text-white text-sm tracking-wide">
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
                                d="M12 6v12m6-6H6"
                            />
                        </svg>
                        <span>Ikuti</span>
                    </button>
                    <a
                        href="#"
                        className="py-2 px-4 flex items-center text-black border text-sm tracking-wide"
                    >
                        <span>Semua Produk</span>
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
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="h-px w-full bg-gray-200"></div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-16">
                {products.length > 0
                    ? products.map((product) => (
                          <ProductItem product={product} />
                      ))
                    : "Produk Kosong"}
            </div>
        </div>
    );
}
