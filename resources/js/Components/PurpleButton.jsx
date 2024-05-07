import React from "react";

export default function PurpleButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="py-2 px-4 rounded-md bg-[#7a8ee0] border-4 border-violet-300 w-fit text-white flex items-center"
        >
            {children}
        </button>
    );
}
