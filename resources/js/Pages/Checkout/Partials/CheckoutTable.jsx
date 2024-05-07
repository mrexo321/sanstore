import React from "react";
import TableItem from "../Components/TableItem";
import TableHeader from "./TableHeader";

export default function CheckoutTable() {
    const cartItems = JSON.parse(localStorage.getItem("cartValue"));

    console.log(cartItems);

    return (
        <>
            <table class="table-auto">
                <TableHeader />
                <tbody className="text-center">
                    {cartItems.map((item) => (
                        <TableItem item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
