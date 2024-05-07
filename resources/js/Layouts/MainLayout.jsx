import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function MainLayout({ children, title }) {
    const data = usePage().props;
    console.log("main layout", data);
    return (
        <div className="min-h-screen">
            <Navbar props={data.categories} title={title} />
            <div className="container min-h-screen mx-auto py-4 px-8">
                <Hero />
                {children}
            </div>
            <Footer />
        </div>
    );
}
