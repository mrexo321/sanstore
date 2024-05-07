import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import CheckoutTitle from "./Partials/CheckoutTitle";
import CheckoutTable from "./Partials/CheckoutTable";

export default function CheckoutDetail() {
    return (
        <div className="flex items-center justify-between w-full gap-x-4">
            <div className="w-full">
                <CheckoutTitle />
                <CheckoutTable />
            </div>
            <div className="w-full">123</div>
        </div>
    );
}

CheckoutDetail.layout = (page) => <MainLayout children={page} />;
