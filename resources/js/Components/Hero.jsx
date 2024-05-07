import React from "react";

export default function Hero() {
    return (
        <div className="bg-[#7a8ee0] py-2 px-4 w-full flex justify-between items-center rounded-md">
            <div className="bg-white py-1 px-2 rounded-md flex items-center text-[#7a8ee0] gap-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className=" tracking-wide ">Pengumuman</span>
            </div>
            <div>123</div>
        </div>
    );
}
