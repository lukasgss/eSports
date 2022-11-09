import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import FormErrorMessage from "../../FormErrorMessage";

interface TextProps {
  register: UseFormRegister<any>;
  textoLabel: string;
  name: string;
  error?: FieldError;
  placeholder: string;
  className?: string;
}

const Text = ({
  register,
  textoLabel,
  name,
  error,
  placeholder,
  className,
}: TextProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        className="text-[rgba(255, 255, 255, .85) text-sm font-semibold mb-1"
        htmlFor={name}
      >
        {textoLabel}
      </label>
      <input
        className={`bg-[#222937] rounded p-4 text-[#E8E8E8] ${
          error ? "border-[2px] border-[#E83B69]" : ""
        }`}
        {...register(name)}
        type="text"
        placeholder={placeholder}
      />
      {error ? <FormErrorMessage error={error.message} /> : null}
    </div>
  );
};

export default Text;
