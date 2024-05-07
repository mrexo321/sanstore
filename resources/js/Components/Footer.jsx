import React from "react";

export default function Footer() {
    return (
        <div className="bg-[#2d2d2b] text-white">
            <div className="p-16 container mx-auto gap-12">
                <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center gap-y-4">
                        <h1 className="font-semibold text-xl">About Us</h1>
                        <div className="flex flex-col">
                            <span>Senin - Jum'at (07.00 - 20.00 WIB)</span>
                            <span>Sabtu & Minggu (Turu)</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-4">
                        <h1 className="font-semibold text-xl">Pembayaran</h1>
                        <div className="flex flex-col">
                            <span>Senin - Jum'at (07.00 - 20.00 WIB)</span>
                            <span>Sabtu & Minggu (Turu)</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-4">
                        <h1 className="font-semibold text-xl">Contact Us</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-x-2">
                                <a
                                    href=""
                                    className="py-2 px-4 flex gap-x-2 items-center rounded-md text-center bg-white text-black"
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
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                    <span>Telepon</span>
                                </a>
                                <a
                                    href=""
                                    className="py-2 px-4 flex gap-x-2 items-center rounded-md text-center bg-white text-black"
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
                                            d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                        />
                                    </svg>

                                    <span>Whatsapp</span>
                                </a>
                            </div>
                            <div>
                                <a
                                    href=""
                                    className="py-2 px-4 flex justify-center gap-x-2 items-center rounded-md  bg-white text-black"
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
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                    <span>Telepon</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
