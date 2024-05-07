import React from "react";
import CasualButton from "./CasualButton";

const ProductDetailGrid = ({ children }) => {
    return (
        <div className="grid grid-cols-2 place-content-center min-h-screen gap-8">
            {children}
        </div>
    );
};

const ImageHolder = ({ children }) => {
    return <>{children}</>;
};

const ItemDetailsContainer = ({ children }) => {
    return <div className="flex flex-col gap-y-4">{children}</div>;
};

const ProductName = ({ children }) => {
    return (
        <div className="flex flex-col gap-4 w-full text-2xl">
            <h1>{children}</h1>
            <div className="h-px border bg-black"></div>
        </div>
    );
};

const ProductPrice = ({ children }) => {
    return (
        <div className="text-[#7a8ee0] font-semibold text-3xl">{children}</div>
    );
};

const ProductVariants = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <span>Pilihan.</span>
            {children}
        </div>
    );
};

const ProductDescription = ({ children, description }) => {
    return (
        <div
            className={`${description}
       ? "transition duration-300"
       : "")}`}
        >
            {children}
        </div>
    );
};

const ProductShare = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <CasualButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                </svg>
                <span>Hubungi sekarang</span>
            </CasualButton>
            <CasualButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 fill-green-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                </svg>

                <span>Whatsapp</span>
            </CasualButton>
            <CasualButton>
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
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                </svg>
                <span>Pesan sekarang</span>
            </CasualButton>
            <CasualButton>
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
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                </svg>
                <span>Pesan sekarang</span>
            </CasualButton>
        </div>
    );
};

ProductDetailGrid.ImageHolder = ImageHolder;
ProductDetailGrid.DetailsContainer = ItemDetailsContainer;
ProductDetailGrid.Name = ProductName;
ProductDetailGrid.Price = ProductPrice;
ProductDetailGrid.Variant = ProductVariants;
ProductDetailGrid.Description = ProductDescription;
ProductDetailGrid.Share = ProductShare;

export default ProductDetailGrid;
