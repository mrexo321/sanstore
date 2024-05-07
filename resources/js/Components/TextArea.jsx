import React from "react";

export default function TextArea({ className = "", ...props }) {
    return (
        <textarea
            {...props}
            rows={4}
            cols={43}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
        />
    );
}
