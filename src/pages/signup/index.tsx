import React, { useRef } from "react";
import Link from "next/link";
import Logo from "@/ui/Logo";
import { useRouter } from "next/navigation";
import Toast, { showErrorToast, showSuccessToast } from "@/ui/Toast";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleFormSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current!.value,
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    };

    try {
      const response = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 201) {
        showSuccessToast(data.message);
        router.push("/");
      } else {
        showErrorToast(data.message);
      }
    } catch (error) {
      showErrorToast("Internal Server Error");
    }
  };
  return (
    <section className="h-screen w-screen">
      <Toast></Toast>
      <div className="flex grow h-full w-full justify-center items-center ">
        <div className="p-2 w-80 border-solid border-[2px] rounded-md border-accentColor">
          <Logo></Logo>
          <p className="text-center text-textColor text-sm font-semibold mx-8">
            Sign up to connect with your friends.
          </p>
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
                placeholder="EMAIL"
              />
              <input
                ref={usernameRef}
                type="text"
                name="username"
                id="username"
                className=" bg-primaryColor border-gray-600 placeholder-textColor text-textColor focus:ring-blue-500 focus:border-blue-500 text-xs rounded font-light block p-2 w-full my-2 "
                placeholder="USERNAME"
              />

              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
                className=" rounded block p-2 bg-primaryColor border-gray-600 placeholder-textColor text-textColor focus:ring-blue-500 text-xs focus:border-blue-500 my-2 w-full font-light
              "
              />

              <button
                type="submit"
                className=" text-textColor bg-secAccentColor hover:bg- focus:ring-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2 mt-4 mb-1Ss w-full"
              >
                {"Sign Up"}
              </button>
            </div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-6 bg-bgColor border-0 dark:bg-accentColor"></hr>
              <span className="absolute px-3.5 font-semibold text-sm -translate-x-1 text-textColor bg-bgColor">
                OR
              </span>
            </div>

            <div className="text-center">
              <p className="text-sm font-light text-textColor">
                {"Already have an account?"}{" "}
                <Link
                  href="/login"
                  className="font-semibold text-textColor hover:underline"
                >
                  {"Login"}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
