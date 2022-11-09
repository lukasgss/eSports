import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  submit?: boolean;
  action?: (...params: (number | object | string)[]) => void;
  loading?: boolean;
  children: React.ReactNode;
}

const Button = ({ submit, action, loading, children }: ButtonProps) => {
  return (
    <div>
      <button
        className="bg-primary-pink disabled:bg-gray-200 disabled:text-gray-800 disabled:cursor-not-allowed"
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
