import { useState, useEffect } from "react";

function useTotalPrice(products) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const calculatePrice = products.reduce(
            (accumulator, product) =>
                accumulator + product.quantity * product.price,
            0
        );
        setTotal(calculatePrice);
    }, [products]);

    return total;
}

export default useTotalPrice;
