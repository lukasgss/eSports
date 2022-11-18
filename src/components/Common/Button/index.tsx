import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  submit?: boolean;
  action?: (...params: (number | object | string)[]) => void;
  loading?: boolean;
  color?: "transparent";
  children: React.ReactNode;
}

const Button = ({ submit, action, color, loading, children }: ButtonProps) => {
  return (
    <div>
      <button
        className={`${
          color === "transparent"
            ? "bg-transparent border hover:bg-white hover:text-black"
            : "bg-primary-pink"
        } disabled:bg-gray-200 disabled:text-gray-800 disabled:cursor-not-allowed`}
        type={submit ? "submit" : "button"}
        disabled={loading}
        onClick={action}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin w-6 h-6 mx-auto" />
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default Button;
