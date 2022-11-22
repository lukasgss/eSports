import React from "react";
import { BiCalendar, BiDollar } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const InformacoesCompeticao = () => {
  const {
    state: { valor },
  } = useLocation();

  return (
    <div className="w-full">
      <div className="flex justify-between bg-primary-gray mt-5 py-8 px-6 rounded-t-md">
        <span className="flex w-full gap-2 items-center text-xl text-lighter-gray">
          <BiCalendar className="w-6 h-6" /> Inscrições
        </span>
        <div className="w-full flex flex-col items-center gap-1 text-[#bbb]">
          <span>20/11/2022 00:00</span>
          <span>até 24/12/2022 00:00</span>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#464646]" />

      <div className="flex justify-between bg-primary-gray pt-12 pb-8 px-6">
        <span className="flex w-full gap-2 items-center text-xl text-l[#bbb]">
          <BiCalendar className="w-6 h-6" /> Data de início
        </span>
        <span className="w-full text-center text-[#bbb]">04/01/2023</span>
      </div>
      <div className="h-[2px] w-full bg-[#464646]" />

      <div className="flex justify-between bg-primary-gray pt-12 pb-8 px-6 rounded-b-md">
        <span className="flex w-full gap-2 items-center text-xl text-l[#bbb]">
          <BiDollar className="w-6 h-6" /> Valor de inscrição
        </span>
        <span className="w-full text-center text-[#bbb]">
          <span className="text-primary-green">R$ {valor.toFixed(2)}</span> por
          player
        </span>
      </div>
    </div>
  );
};

export default InformacoesCompeticao;
