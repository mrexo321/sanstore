import CounterButton from "@/Components/CounterButton";
import CounterInput from "@/Components/CounterInput";
import ProductDetailGrid from "@/Components/ProductDetailGrid";
import MainLayout from "@/Layouts/MainLayout";
import useCart from "@/hooks/useCart";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function ProductDetail(props) {
    const { product } = usePage().props;
    const { addToCart, quantity, increaseQuantity, decreaseQuantity } =
        useCart();

    console.log(product);

    return (
        <ProductDetailGrid>
            <ProductDetailGrid.ImageHolder>
                <img src={product.image} alt="" />
            </ProductDetailGrid.ImageHolder>
            <ProductDetailGrid.DetailsContainer>
                <ProductDetailGrid.Name>
                    {product.productName}
                </ProductDetailGrid.Name>
                <ProductDetailGrid.Price>
                    Rp.{product.price}
                </ProductDetailGrid.Price>
                <ProductDetailGrid.Description>
                    {product.description}
                </ProductDetailGrid.Description>
                <div className="flex items-center gap-x-4">
                    <div>
                        <CounterButton onClick={decreaseQuantity}>
                            -
                        </CounterButton>
                        <CounterInput name="qty" value={quantity} />
                        <CounterButton onClick={increaseQuantity}>
                            +
                        </CounterButton>
                    </div>
                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </ProductDetailGrid.DetailsContainer>
        </ProductDetailGrid>
    );
}
ProductDetail.layout = (page) => <MainLayout children={page} />;
