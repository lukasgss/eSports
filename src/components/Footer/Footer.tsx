import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

import websiteLogo from "../../assets/img/websiteLogo.png";

const Footer = () => {
  return (
    <div className="h-auto md:h-30 flex flex-col md:flex-row justify-between p-10">
      <div className="flex items-center justify-center md:justify-start mb-5 md:mb-0 gap-4">
        <img src={websiteLogo} alt="Logo do site" className="w-16 h-16" />
        <span className="text-primary-pink text-xl">eSports</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 text-white">
        <div>Termos de uso e Políticas de privacidade</div>
        <span className="hidden md:block">|</span>
        <div className="text-center md:text-left">@eSportsBrasil</div>
        <div className="flex gap-5">
          <AiOutlineInstagram className="h-5 w-5" />
          <MdLanguage className="w-5 h-5" />
          <FaWhatsapp className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
