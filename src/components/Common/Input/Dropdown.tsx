import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { Controller, Control, FieldError } from "react-hook-form";
import FormErrorMessage from "../../FormErrorMessage";

export interface DadosDropdown {
  text: string;
  value: number;
}

interface DropdownProps {
  name: string;
  placeholder: string;
  control: Control<any>;
  defaultValue?: number;
  arrDados: DadosDropdown[];
  textoLabel?: string;
  error: FieldError | undefined;
}

const Dropdown = ({
  name,
  placeholder,
  control,
  defaultValue,
  arrDados,
  textoLabel,
  error,
}: DropdownProps) => {
  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ?? ""}
        render={({ field }) => (
          <>
            {textoLabel ? (
              <div>
                <label htmlFor={name} className="font-semibold text-sm">
                  {textoLabel}
                </label>
              </div>
            ) : null}
            <Listbox {...field}>
              {({ open }) => (
                <div className="relative mt-1 z-50">
                  <Listbox.Button
                    className={`relative h-12 w-full rounded-lg bg-primary-gray py-2 pl-3 pr-10 text-left 
                shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
                focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm ${
                  error ? "border-[2px] border-[#e83b69]" : ""
                }`}
                  >
                    <span className="block truncate text-light-gray">
                      {field.value.text ?? placeholder}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoIosArrowUp
                        className={`h-5 w-5 text-light-gray rotate-180 duration-200 ${
                          open ? "rotate-0" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary-gray 
                  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 scrollbar-thin scrollbar-thumb-[#46505e]"
                    >
                      {arrDados.map((dado) => (
                        <Listbox.Option
                          key={dado.value}
                          className={`relative cursor-pointer select-none px-2 my-2 ${
                            field.value.text === dado.text
                              ? "bg-darker-blue rounded-lg"
                              : ""
                          }`}
                          value={dado}
                        >
                          {({ active }) => (
                            <span
                              className={`${
                                active ? "bg-darker-blue" : ""
                              } block truncate p-1 rounded text-light-gray font-semibold ${
                                field.value.text === dado.text
                                  ? "bg-darker-blue"
                                  : ""
                              }`}
                            >
                              {dado.text}
                            </span>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
            </Listbox>
          </>
        )}
      />
      {error ? <FormErrorMessage error={error.message} /> : null}
    </div>
  );
};

export default Dropdown;
