import MainLayout from "@/Layouts/MainLayout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import ProductBlock from "./Partials/ProductBlock";

export default function Homepage(props) {
    const { products } = usePage().props;
    // const data = usePage().props;
    return (
        <>
            <ProductBlock products={products} />
        </>
    );
}

Homepage.layout = (page) => {
    return <MainLayout children={page} title="Homepage" />;
};
