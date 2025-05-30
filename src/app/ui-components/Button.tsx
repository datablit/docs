"use client";

import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "searchbtn"
    | "toolbtn"
    | "sidebarbtn"
    | "board"
    | "boardActive";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded focus:outline-none transition transition-all text-sm whitespace-nowrap ";

const sizeStyles = {
  sm: "px-3 py-1 text-sm h-8 rounded-md w-[90px]",
  md: "px-4 py-2 text-base h-9 rounded-md w-[120px]",
  lg: "px-5 py-3 text-lg h-11 rounded-md w-[150px]",
};

const variantStyles = {
  primary:
    "bg-[#1F1F4C] text-gray-100 hover:bg-[#8F8FCB] shadow hover:text-[#1F1F4C] border border-[#8F8FCB] hover:border hover:border-bg[#1F1F4C]",
  secondary:
    "bg-gray-100 text-[#1F1F4C] hover:bg-[#E9E9FC] shadow-sm bg-[#8F8FCB] hover:text-gray-800",
  outline: "border border-gray-300 hover:bg-gray-50  shadow-sm text-[#1F1F4C]",
  searchbtn:
    "border-[#D9D9D9] border-[0.5px] bg-[#ffffff] rounded-none shadow ",
  toolbtn: "border-none bg-transparent shadow",
  sidebarbtn:
    "flex items-center gap-1.5 justify-center font-normal h-7 px-[18px]text-sm overflow-hidden shadow",
  board: "hover:bg-blue-500/20 hover:text-blue-800",
  boardActive: "bg-blue-500/20 text-blue-800 shadow",
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "sm",
  loading = false,
  disabled,
  className,
  ...props
}) => {
  const isDisabled = loading || disabled;

  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
