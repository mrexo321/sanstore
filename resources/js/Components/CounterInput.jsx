import React from "react";

export default function CounterInput({ name, value }) {
    return (
        <input
            type="text"
            className="w-auto text-center border-none"
            name={name}
            value={value}
        />
    );
}
