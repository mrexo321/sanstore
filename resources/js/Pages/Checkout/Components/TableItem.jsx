import React from "react";

export default function TableItem({ item }) {
    return (
        <tr>
            <td className="flex items-center gap-x-4 ">
                <img className="w-24 rounded-lg" src={item.image} alt="" />
                <div className="flex flex-col">
                    <span className="font-bold">{item.productName}</span>
                    <span className="text-gray-600">
                        {item.category.categoryName}
                    </span>
                </div>
            </td>
            <td className="px-8">{item.quantity}</td>
            <td>{item.price}</td>
        </tr>
    );
}
