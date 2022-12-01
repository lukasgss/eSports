import React from "react";
import DatePicker from "react-datepicker";
// eslint-disable-next-line import/no-duplicates
import ptBR from "date-fns/locale/pt-BR";

import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller, FieldError } from "react-hook-form";

import "./index.scss";
import FormErrorMessage from "../../../FormErrorMessage";

interface DatepickerProps {
  name: string;
  control: Control<any>;
  textoLabel?: string;
  error: FieldError | undefined;
}

const Datepicker = ({ name, control, textoLabel, error }: DatepickerProps) => {
  return (
    <div className="w-full z-[8391289]">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="w-full">
            {textoLabel ? (
              <label className="font-semibold text-sm">{textoLabel}</label>
            ) : null}
            <DatePicker
              {...field}
              className={`cursor-pointer hover:opacity-75 ${
                error ? "border-[2px] border-[#E83B69]" : ""
              }`}
              selected={field.value}
              dateFormat="dd/MM/yyyy"
              placeholderText="__/__/____"
              locale={ptBR}
            />
          </div>
        )}
      />
      {error ? <FormErrorMessage error={error.message} /> : null}
    </div>
  );
};

export default Datepicker;
