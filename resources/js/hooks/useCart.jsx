import { useState, useEffect } from "react";
import useQuantity from "./useQuantity";

function useCart() {
    const [cart, setCart] = useState([]);
    const { quantity, increaseQuantity, decreaseQuantity } = useQuantity(1);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartValue"));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartValue", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (productToAdd) => {
        const updatedCart = [...cart];
        const existingItem = updatedCart.findIndex(
            (item) => item.id === productToAdd.id
        );

        if (existingItem !== -1) {
            // If the product is already in the cart, increment its quantity
            updatedCart[existingItem].quantity += quantity;
        } else {
            // If it's a new product, add it to the cart with a quantity of 1
            updatedCart.push({ ...productToAdd, quantity: quantity });
        }
        setCart(updatedCart);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product);
        alert(`Produk ${product} berhasil dihapus`);
        setCart(updatedCart);
    };

    return {
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        quantity,
    };
}

export default useCart;
