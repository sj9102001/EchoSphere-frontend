import Link from "next/link";
import React, { useRef } from "react";
import Logo from "@/ui/Logo";
import Toast, { showErrorToast } from "@/ui/Toast";
import { useRouter } from "next/router";


const Login = () => {
    const router = useRouter();
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const handleFormSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current!.value,
            password: passwordRef.current!.value,
        };
        try {
            const response = await fetch("http://localhost:8080/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",
            });
            const data = await response.json();
            if (response.status === 200) {
                router.replace("/");
            } else {
                showErrorToast(data.message);
            }
        } catch (error) {
            showErrorToast("An error occurred during login");
        }

    };

    return (
        <section className="h-screen w-screen">
            <Toast></Toast>
            <div className="flex grow h-full w-full justify-center items-center ">
                <div className="p-2 w-80 border-solid border-[2px] rounded-md border-accentColor">
                    <Logo></Logo>
                    <form
                        onSubmit={() => handleFormSubmit(event as SubmitEvent)}
                        className="space-y-3 flex-row h-full w-full justify-center items-center p-6"
                    >
                        <div className="flex-row">
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                id="email"
                                className=" bg-primaryColor placeholder-textColor text-textColor focus:ring-blue-500 focus:border-blue-500 text-xs font-light rounded block p-2 w-full my-2 "
                                placeholder="USERNAME OR EMAIL"
                            />
                            <input
                                ref={passwordRef}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="PASSWORD"
                                className=" rounded block p-2 bg-primaryColor border-gray-600 placeholder-textColor text-textColor focus:ring-blue-500 text-xs focus:border-blue-500 my-2 w-full font-light"
                            />

                            <button
                                type="submit"
                                className=" text-textColor bg-secAccentColor hover:bg- focus:ring-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2 mt-4 mb-1Ss w-full"
                            >
                                {"Login"}
                            </button>
                            <div className="text-end">
                                <a
                                    href="/forgotpass"
                                    className="text-xs font-medium text-textColor hover:underline"
                                >
                                    Forgotten your password?
                                </a>
                            </div>
                        </div>
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-6 bg-bgColor border-0 dark:bg-accentColor"></hr>
                            <span className="absolute px-3.5 font-semibold text-sm -translate-x-1 text-textColor bg-bgColor">
                                OR
                            </span>
                        </div>

                        <div className="text-center">
                            <p className="text-sm font-light text-textColor">
                                {"Don't have an account?"}{" "}
                                <Link
                                    href="/signup"
                                    className="font-semibold text-textColor hover:underline"
                                >
                                    {"Sign Up"}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
