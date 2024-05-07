import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Login() {
    const { data, setData, post, errors, processing, reset } = useForm({
        username: "",
        password: "",
    });
    useEffect(() => {
        reset("password");
    }, [errors]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("authenticate"));
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <InputLabel htmlFor="username" value="Username" />
                <TextInput
                    id="username"
                    name="username"
                    value={data.username}
                    className="mt-1 block w-full"
                    onChange={handleChange}
                />
                <InputError message={errors.username} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    onChange={handleChange}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="flex justify-end items-center mt-4">
                <PrimaryButton className="ml-4" disabled={processing}>
                    Log in
                </PrimaryButton>
            </div>
        </form>
    );
}

Login.layout = (page) => <GuestLayout children={page} title="Login Pages" />;
