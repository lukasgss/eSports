import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import FormErrorMessage from "../../FormErrorMessage";

interface TextareaProps {
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
  textoLabel: string;
  className?: string;
  error?: FieldError;
}

const Textarea = ({
  register,
  textoLabel,
  name,
  error,
  placeholder,
  className,
}: TextareaProps) => {
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
      <div className="relative h-full">
        <textarea
          className={`w-full bg-[#222937] rounded p-4 text-lighter-gray resize-none ${
            error ? "border-[2px] border-[#E83B69]" : ""
          }`}
          {...register(name)}
          placeholder={placeholder}
        />
      </div>
      {error ? <FormErrorMessage error={error.message} /> : null}
    </div>
  );
};

export default Textarea;
