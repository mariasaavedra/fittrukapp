import React from 'react';
import { Stytch, SDKProductTypes } from "@stytch/stytch-react";
import { ComponentProps } from "../../interfaces/ComponentProps";

const loginOrSignupViewConfig = {
  emailMagicLinksOptions: {
    createUserAsPending: false,
    loginExpirationMinutes: 30,
    loginRedirectURL: "http://localhost:3000/auth",
    signupExpirationMinutes: 30,
    signupRedirectURL: "http://localhost:3000/auth",
  },
  products: [SDKProductTypes.emailMagicLinks],
};

interface LoginWithEmailProps extends ComponentProps {
  cancel?: any;
}

const LoginWithEmail = ({ cancel }: LoginWithEmailProps) => (
  <div className="flex flex-col justify-center items-center mx-auto p-4">
    <div className="mb-[25%] w-full">
      <img src="/images/logo.png" alt="logo" />
    </div>
    <button
      className="self-start mb-12 text-naturalGrey-400 hover:text-primaryGreen-600"
      onClick={cancel}
    >
      {"< Back"}
    </button>
    <Stytch loginOrSignupView={loginOrSignupViewConfig} />
  </div>
);

export default LoginWithEmail;
