import React, { useState } from "react";

function useQuantity(value) {
    const [quantity, setQuantity] = useState(value);
    return {
        quantity,
        increaseQuantity: () => setQuantity((prevQuantity) => prevQuantity + 1),
        decreaseQuantity: () =>
            quantity > 1
                ? setQuantity((prevQuantity) => prevQuantity - 1)
                : false,
    };
}
export default useQuantity;
