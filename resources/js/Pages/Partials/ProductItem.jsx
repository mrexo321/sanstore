import { Link } from "@inertiajs/react";
import React from "react";

export default function ProductItem({ product }) {
    // console.log("data", product.image);
    return (
        <div className="flex flex-col gap-y-2">
            <Link href={route("product.show", product.slug)}>
                <img
                    className="rounded-lg w-96 h-28 flex-shrink-0"
                    src={product.image}
                    alt=""
                />
            </Link>
            <span>{product.productName}</span>
            <span className="text-[#7a8ee0] tracking-wide">
                Rp.{product.price.toLocaleString()}
            </span>
        </div>
    );
}
