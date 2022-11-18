import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Notificacoes = () => {
  return (
    <div className="flex gap-5 h-fit mx-4 lg:mx-8">
      <button
        type="button"
        className="flex py-4 lg:py-5 items-center justify-center bg-darker-blue rounded-xl"
      >
        <IoIosNotifications className="w-6 h-6 text-[#cdcdcd]" />
      </button>
    </div>
  );
};

export default Notificacoes;
