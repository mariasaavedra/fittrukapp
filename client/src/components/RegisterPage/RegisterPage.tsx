/* eslint-disable */ 
import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { ComponentProps } from "../../interfaces/ComponentProps";
import { FTRootState } from "../../interfaces/FTRootState";
import {
  MaybeParentComponentProps,
  ParentComponentProps,
} from "../../interfaces/ParentComponentProps";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Label = ({ children }: ParentComponentProps) => (
  <h2 className="text-sm font-bold text-naturalGrey-800 mb-2">{children}</h2>
);

const ShowPasswordIcon = (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.80327 12.2526C8.42774 12.6759 9.18882 12.9319 9.99868 12.9319C12.1453 12.9319 13.8919 11.1696 13.8919 9.00369C13.8919 8.18655 13.6382 7.41863 13.2186 6.78855L12.1551 7.86166C12.3307 8.1964 12.4283 8.5902 12.4283 9.00369C12.4283 10.3525 11.3354 11.4551 9.99868 11.4551C9.58887 11.4551 9.19858 11.3567 8.86683 11.1795L7.80327 12.2526ZM16.4288 3.54952C17.8436 4.84907 19.0438 6.60149 19.9415 8.70834C20.0195 8.8954 20.0195 9.11199 19.9415 9.2892C17.8534 14.1921 14.1358 17.1259 9.99868 17.1259H9.98893C8.10575 17.1259 6.30063 16.5056 4.71018 15.3735L2.81725 17.2834C2.67089 17.4311 2.4855 17.5 2.30011 17.5C2.11472 17.5 1.91957 17.4311 1.78297 17.2834C1.53903 17.0373 1.5 16.6435 1.69515 16.358L1.72442 16.3186L16.1556 1.75771C16.1751 1.73802 16.1946 1.71833 16.2044 1.69864L16.2044 1.69863C16.2239 1.67894 16.2434 1.65925 16.2532 1.63957L17.1704 0.714131C17.4631 0.428623 17.9217 0.428623 18.2046 0.714131C18.4974 0.999638 18.4974 1.4722 18.2046 1.75771L16.4288 3.54952ZM6.09836 9.00753C6.09836 9.2635 6.12764 9.51948 6.16667 9.75576L2.55643 13.3984C1.5807 12.2564 0.731804 10.8781 0.0585443 9.29304C-0.0195148 9.11583 -0.0195148 8.89924 0.0585443 8.71218C2.14662 3.80933 5.86419 0.885337 9.99156 0.885337H10.0013C11.3966 0.885337 12.7529 1.22007 14.0018 1.85015L10.7429 5.13841C10.5087 5.09903 10.255 5.0695 10.0013 5.0695C7.84494 5.0695 6.09836 6.83177 6.09836 9.00753Z"
      fill="#B5B6B9"
    />
  </svg>
);

const LocationIcon = (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.60498 6.65421C0.60498 2.97431 3.68008 0 7.39974 0C11.1299 0 14.205 2.97431 14.205 6.65421C14.205 8.50855 13.5306 10.2301 12.4206 11.6893C11.196 13.2988 9.6867 14.7012 7.98781 15.8019C7.59899 16.0563 7.24808 16.0755 6.82134 15.8019C5.11277 14.7012 3.60345 13.2988 2.38938 11.6893C1.27857 10.2301 0.60498 8.50855 0.60498 6.65421ZM5.16059 6.86137C5.16059 8.09414 6.16653 9.06371 7.39996 9.06371C8.6342 9.06371 9.64982 8.09414 9.64982 6.86137C9.64982 5.63821 8.6342 4.62144 7.39996 4.62144C6.16653 4.62144 5.16059 5.63821 5.16059 6.86137Z"
      fill="#80BD02"
    />
  </svg>
);

interface RegisterPageProps extends MaybeParentComponentProps {
  cancel?: any;
}
const RegisterPage = ({ cancel }: RegisterPageProps) => {
  const username = useInput("");
  const password = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const phoneNumber = useInput("");
  const location = useInput("");

  // const dispatch = useDispatch();
  // const errors = useSelector((store: FTRootState) => store.errors);
  // const history = useHistory();
  const errors: Array<any> = [];

  const registerUser = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // dispatch({
    //   type: "REGISTER",
    //   payload: {
    //     username: username.value,
    //     password: password.value,
    //     first_name: firstName.value,
    //     last_name: lastName.value,
    //     email: email.value,
    //     phoneNumber: phoneNumber.value,
    //   },
    // });
  };

  return (
    <form
      className="p-4 md:p-12 flex flex-col justify-between grow"
      onSubmit={registerUser}
    >
      <div className="py-12">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div>
        <h1 className="font-bold text-xl mb-1">REGISTER</h1>
        <span className="text-naturalGrey-400 font-semibold">
          Lets get you all set up so you can verify your personal account and
          set up your profile
        </span>
        <div className="md:grid md:grid-cols-2 flex flex-col gap-4 mt-10">
          <div>
            <Label>Username</Label>
            <Input placeholder="Enter Email or Phone Number" {...username} />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input placeholder="Enter Last Name" {...lastName} />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input placeholder="Enter Phone Number" {...phoneNumber} />
          </div>
          <div>
            <Label>Email</Label>
            <Input placeholder="Enter Email" {...email} type="email" />
          </div>
          <div className="relative">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password" {...password} />
            <a className="absolute right-6 top-11 text-naturalGrey-400">
              {ShowPasswordIcon}
            </a>
          </div>
          <div className="relative">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Enter Confirm Password"
              {...password}
            />
            <a className="absolute right-6 top-11 text-naturalGrey-400">
              {ShowPasswordIcon}
            </a>
          </div>
          <div className="col-span-2">
            <Label>Location</Label>
            <div className="flex relative">
              <Input placeholder="Choose Location" {...location} />
              <a className="border rounded-2xl p-4 mr-1">
                {LocationIcon}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10 space-y-2">
          <label className="text-sm text-naturalGrey-500">
            <input
              type="checkbox"
              className="hover:bg-lime-400 p-1 mr-2 -hue-rotate-90 brightness-150 rounded"
            />
            Yes, I want to receive FITTRUCK emails
          </label>
          <label className="text-sm text-naturalGrey-500">
            <input
              type="checkbox"
              className="hover:bg-lime-400 p-1 mr-2 -hue-rotate-90 brightness-150 rounded"
            />
            I agree to all the
            <strong className="text-primaryGreen-500 ml-2">
              Terms and Conditions
            </strong>{" "}
            and
            <strong className="text-primaryGreen-500 ml-2">
              Privacy Policy
            </strong>
          </label>
        </div>
      </div>
      <div>
        {errors.registrationMessage && (
          <div className="text-error-400 my-2">
            {errors.registrationMessage}
          </div>
        )}
        <Button className="rounded-2xl bg-naturalGrey-800 hover:bg-primaryGreen-700 text-white w-full py-2 mb-4 transition-all">
          CREATE ACCOUNT
        </Button>
        <div className="flex justify-center d-block mt-2">
          Already have an account?
          <a
            className="d-block ext-primaryGreen-500 ml-2 font-bold "
            onClick={cancel}
          >
            Log In
          </a>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
