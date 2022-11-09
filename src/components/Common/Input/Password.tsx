import React, { useState } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FormErrorMessage from "../../FormErrorMessage";

interface PasswordProps {
  register: UseFormRegister<any>;
  name: string;
  textoLabel: string;
  error?: FieldError;
  placeholder?: string;
  className?: string;
}

const Password = ({
  register,
  name,
  textoLabel,
  error,
  placeholder,
  className,
}: PasswordProps) => {
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  return (
    <div>
      <div className={`relative ${className}`}>
        <label
          className="text-[rgba(255, 255, 255, .85) text-sm font-semibold mb-1"
          htmlFor={name}
        >
          {textoLabel}
        </label>
        <input
          className={`bg-[#222937] rounded p-4 pr-10 text-[#E8E8E8] w-full ${
            error ? "border-[2px] border-[#E83B69]" : ""
          }`}
          {...register(name)}
          type={isShowingPassword ? "text" : "password"}
          placeholder={placeholder}
        />
        <div className="absolute top-[38px] right-2">
          <button
            type="button"
            className="p-1"
            onClick={() =>
              setIsShowingPassword((valorAnterior) => !valorAnterior)
            }
          >
            {isShowingPassword ? (
              <AiFillEyeInvisible className="w-5 h-5" />
            ) : (
              <AiFillEye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {error ? <FormErrorMessage error={error.message} /> : null}
    </div>
  );
};

export default Password;
