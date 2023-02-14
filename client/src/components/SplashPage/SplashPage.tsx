import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import useInput from "../../hooks/useInput";

export interface SplashPageProps {
  user?: unknown;
}
const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="bg-[#80BD02] h-screen">
      <img
        className="mx-auto pt-20"
        src="/images/white-logo.png"
        width="400px"
        alt="logo"
      />
      <div className="flex items-center justify-center">
        <div>
          <img src="/images/truck.png" alt="truck" />
          <div>
            <button
              onClick={() => {
                router.replace("/api/auth/login");
              }}
              className="p-4 my-2 rounded-lg bg-naturalGrey-800 text-[#fff] w-1/2"
            >
              <Link className="w-full" href="/api/auth/login">
                Login
              </Link>
            </button>
            <button
              onClick={() => {
                router.replace("/auth/register");
              }}
              className="p-4 my-2 rounded-lg bg-white  border-white border-solid border ml-4 text-[#333] w-[48%]"
            >
              Sign Up
            </button>
            <Link href="/member/classes">
              <button className="p-4 my-2 w-full block border border-white border-solid border-naturalGrey-50 rounded-lg text-[#fff]">
                Show Classes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
