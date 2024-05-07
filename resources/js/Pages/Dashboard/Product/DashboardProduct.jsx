import React, { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import "react-quill/dist/quill.snow.css";
import slugify from "react-slugify";
import FileUpload from "@/Components/FileUpload";
import Alert from "@/Components/Alert";

export default function DashboardProduct() {
    const { data, setData, post, processing, errors, reset } = useForm({
        productName: "",
        slug: "",
        description: "",
        image: "",
        price: null,
    });

    const { flash } = usePage().props;

    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        reset();
    }, []);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", data.image);
        post(route("dashboard.product.store"), formData);
        reset();
    };

    return (
        <>
            <span>Product Dashboard</span>
            {flash.message && <Alert>{flash.message}</Alert>}
            <form
                className="w-1/3"
                onSubmit={submitHandler}
                encType="multipart/form-data"
            >
                <div className="mt-4 ">
                    <InputLabel value={"Nama Produk"} />
                    <TextInput
                        id="password"
                        name="productName"
                        value={data.productName}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.productName} className="mt-2" />
                </div>
                <div className="mt-4 ">
                    <InputLabel value={"Slug"} />
                    <TextInput
                        id="slug"
                        name="slug"
                        value={slugify(data.productName)}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4">
                    <InputLabel value={"Deskripsi Produk"} />
                    <TextArea
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div className="mt-4 ">
                    <InputLabel value={"Harga Produk"} />
                    <TextInput
                        id="price"
                        name="price"
                        type="number"
                        value={data.price}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.price} className="mt-2" />
                </div>
                <div className="mt-4 w-full">
                    <InputLabel value={"Gambar Produk"} />
                    <FileUpload
                        previewImage={previewImage}
                        name="image"
                        onChange={handleFile}
                    />
                    <InputError message={errors.image} className="mt-2" />
                </div>
                <div className="mt-4 flex justify-start items-center">
                    <PrimaryButton disabled={processing}>Submit</PrimaryButton>
                </div>
            </form>
        </>
    );
}
DashboardProduct.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        user={page.props.auth.user}
        title={"Dashboard - Product"}
    />
);
