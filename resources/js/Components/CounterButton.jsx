import React from "react";

export default function CounterButton({ children, onClick }) {
    return (
        <button onClick={onClick} className="p-2 border bg-gray-200">
            {children}
        </button>
    );
}
