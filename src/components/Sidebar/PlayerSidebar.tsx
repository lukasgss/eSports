import React from "react";
import { MdOutlineMenuOpen, MdHome } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import websiteLogo from "../../assets/img/websiteLogo.png";
import OpcoesNavegacao from "./components/OpcoesNavegacao";

const PlayerSidebar = () => {
  return (
    <aside className="w-64 bg-[#0C131D] min-h-screen hidden lg:block">
      <div className="fixed h-full flex flex-col justify-between">
        <div>
          <div className="py-5 px-2.5 flex items-center gap-3">
            <img src={websiteLogo} alt="logo website" />
            <h3 className="text-white font-bold text-sm">
              <span className="text-primary-pink">Empresa</span> Sport
            </h3>
            <button
              type="button"
              className="w-fit p-2 bg-primary-gray text-light-gray"
            >
              <MdOutlineMenuOpen className="w-5 h-5" />
            </button>
          </div>

          <div className="px-3">
            <span className="text-light-gray font-semibold">Menu</span>
            <div className="h-[2px] w-full bg-dark-blue my-4" />
          </div>
          <OpcoesNavegacao />
        </div>

        <div className="px-2.5 flex items-center gap-5 text-lighter-gray mb-4">
          <button type="button" className="flex items-center gap-4 p-0">
            <span className="ml-2.5 p-1.5 rounded-md bg-primary-gray text-light-gray">
              <MdLogout className="w-7 h-7 rotate-180" />
            </span>
            <span className="font-bold">Sair da conta</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default PlayerSidebar;
