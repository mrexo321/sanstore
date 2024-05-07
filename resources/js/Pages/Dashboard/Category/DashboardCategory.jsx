import Alert from "@/Components/Alert";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import slugify from "react-slugify";

export default function DashboardCategory(props) {
    const { data, setData, post, reset, errors, processing } = useForm({
        categoryName: "",
        slug: "",
    });

    const { flash } = usePage().props;

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("dashboard.category.store"));
        reset();
    };
    console.log(flash);
    return (
        <>
            <span>Product Dashboard</span>
            {flash.message && <Alert>{flash.message}</Alert>}
            <form className="w-1/3" onSubmit={submitHandler}>
                <div className="mt-4">
                    <InputLabel value={"Nama Kategori"} />
                    <TextInput
                        id="category"
                        name="categoryName"
                        value={data.categoryName}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.categoryName}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4 ">
                    <InputLabel value={"Slug"} />
                    <TextInput
                        id="slug"
                        name="slug"
                        value={slugify(data.categoryName)}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4 flex justify-start items-center">
                    <PrimaryButton disabled={processing}>Submit</PrimaryButton>
                </div>
            </form>
        </>
    );
}

DashboardCategory.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        user={page.props.auth.user}
        title={"Dashboard - Category"}
    />
);
