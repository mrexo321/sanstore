import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Test() {
    return (
        <>
            <Link href="/">Homepage</Link>
        </>
    );
}

Test.layout = (page) => <MainLayout children={page} title="test" />;
