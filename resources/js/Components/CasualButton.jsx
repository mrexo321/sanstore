import React from "react";

export default function CasualButton({ children, background }) {
    return (
        <button
            className={`py-2 px-4 rounded-md ${background} w-full justify-center border flex items-center `}
        >
            {children}
        </button>
    );
}
