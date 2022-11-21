import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";
import FormErrorMessage from "../../FormErrorMessage";

interface TextProps {
  register: UseFormRegister<any>;
  textoLabel?: string;
  name: string;
  error?: FieldError;
  placeholder: string;
  Icon?: IconType;
  className?: string;
}

const Text = ({
  register,
  textoLabel,
  name,
  error,
  placeholder,
  Icon,
  className,
}: TextProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {textoLabel ? (
        <label
          className="text-[rgba(255, 255, 255, .85) text-sm font-semibold mb-1"
          htmlFor={name}
        >
          {textoLabel}
        </label>
      ) : null}
      <div className="relative">
        <input
          className={`w-full bg-[#222937] rounded p-4 text-lighter-gray ${
            error ? "border-[2px] border-[#E83B69]" : ""
          } ${Icon ? "pl-10" : ""}`}
          {...register(name)}
          type="text"
          placeholder={placeholder}
        />
        {Icon ? (
          <Icon className="w-6 h-6 absolute bottom-[30%] left-2" />
        ) : null}
      </div>
      {error ? <FormErrorMessage error={error.message} /> : null}
    </div>
  );
};

export default Text;
