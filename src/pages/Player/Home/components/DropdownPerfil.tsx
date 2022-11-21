import React from "react";
import { MdExpandMore } from "react-icons/md";
import { HiUsers, HiUser } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { Menu } from "@headlessui/react";

import playerImg from "../../../../assets/img/playerImageProfile.png";

const DropdownPerfil = () => {
  return (
    <Menu>
      <Menu.Button
        className="w-[80px] lg:w-[300px] mr-3 lg:mr-8 flex items-center gap-1 bg-darker-blue px-4
       lg:px-6 py-55555 rounded-xl justify-center"
      >
        <img
          src={playerImg}
          alt="foto de perfil player"
          className="rounded-full"
        />
        <div className="w-full text-left leading-4 hidden lg:block">
          <h2 className="font-bold text-white">Nome player</h2>
          <span
            className="inline-block w-[130px] text-light-gray text-xs truncate"
            title="emailplayer@gmail.com"
          >
            emailplayer@gmail.com
          </span>
        </div>
        <div className="hidden">
          <MdExpandMore className="block w-7 h-7 text-[#cdcdcd]" />
        </div>
      </Menu.Button>
      <Menu.Items
        className="absolute bg-darker-blue right-8 top-[70px] lg:top-[60px] mt-2 w-[265px] origin-top-right
       rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non"
      >
        <Menu.Item>
          {({ active }) => (
            <div className="mx-4 mt-3">
              <button
                type="button"
                className={`${
                  active ? "bg-[#2E374A]" : ""
                } flex gap-2 p-2 rounded`}
              >
                <HiUsers className="w-5 h-5 text-light-gray" />
                <span className="text-light-gray">Trocar perfil</span>
              </button>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div className="mx-4">
              <button
                type="button"
                className={`${
                  active ? "bg-[#2E374A]" : ""
                } flex gap-2 p-2 rounded`}
              >
                <HiUser className="w-5 h-5 text-light-gray" />
                <span className="text-light-gray">Perfil</span>
              </button>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div className="mx-4 mb-3">
              <button
                type="button"
                className={`${
                  active ? "bg-[#2E374A]" : ""
                } flex gap-2 p-2 rounded`}
              >
                <MdLanguage className="w-5 h-5 text-light-gray" />
                <span className="text-light-gray">Idioma</span>
              </button>
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default DropdownPerfil;
