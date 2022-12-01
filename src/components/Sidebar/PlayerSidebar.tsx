import React, { useContext } from "react";
import { MdOutlineMenuOpen, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import websiteLogo from "../../assets/img/websiteLogo.png";
import { PlayerNavbarContext } from "../../contexts/PlayerSidebarContext";
import OpcoesNavegacao from "./components/OpcoesNavegacao";

const PlayerSidebar = () => {
  const { sidebarStatus: expanded, updateSidebarStatus } =
    useContext(PlayerNavbarContext);

  return (
    <aside
      className={`${
        expanded ? "w-[300px]" : "w-20"
      } bg-[#0C131D] duration-200 min-h-screen`}
    >
      <div
        className={`
          ${expanded ? "w-64" : "w-20"}
        fixed h-full flex flex-col justify-between`}
      >
        <div className="w-full duration-200">
          <div
            className={`${
              expanded ? "flex-row" : "flex-col"
            } py-5 px-2.5 flex items-center gap-3`}
          >
            <Link to="/" className="flex items-center gap-3 hover:no-underline">
              <img src={websiteLogo} alt="logo website" />
              <h3
                className={`${
                  expanded ? "block" : "hidden"
                } text-white font-bold text-sm`}
              >
                <span className="text-primary-pink">Empresa</span> Sport
              </h3>
            </Link>
            {!expanded ? <div className="bg-dark-blue w-full h-[2px]" /> : null}
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => updateSidebarStatus(!expanded)}
                className="w-fit p-2 bg-primary-gray text-light-gray"
              >
                <MdOutlineMenuOpen className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full px-3">
            <span className="text-light-gray font-semibold">Menu</span>
            <div className="h-[2px] w-full bg-dark-blue my-4" />
          </div>
          <OpcoesNavegacao expanded={expanded} />
        </div>

        <div className="px-2.5 flex items-center gap-5 text-lighter-gray mb-4">
          <button type="button" className="flex items-center gap-4 p-0">
            <span className="ml-2.5 p-1.5 rounded-md bg-primary-gray text-light-gray">
              <MdLogout title="Sair da conta" className="w-7 h-7 rotate-180" />
            </span>
            {expanded ? <span className="font-bold">Sair da conta</span> : null}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default PlayerSidebar;
