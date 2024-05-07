import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function CategoryModal({ trigger, categories }) {
    return (
        <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 z-10 w-32 overflow-y-auto bg-white flex flex-col ">
                <button
                    className="p-4 self-center"
                    onClick={() => trigger(false)}
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                {categories.map((category) => (
                    <Link
                        href="#"
                        className="p-4 hover:bg-gray-200 hover:text-[#7a8ee0] text-center"
                    >
                        {category.categoryName}
                    </Link>
                ))}
            </div>
        </div>
    );
}
