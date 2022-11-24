import React from "react";
import { BiCalendar } from "react-icons/bi";

import imgNoticia from "../../../../../assets/img/Portal/Noticia/noticiaCard.png";

interface ICardNoticiaProps {
  titulo: string;
  descricao: string;
  data: string;
}

const CardNoticia = ({ titulo, descricao, data }: ICardNoticiaProps) => {
  return (
    <div className="bg-[#1D252F] w-[320px] lg:w-[400px] rounded">
      <img src={imgNoticia} alt="Imagem da notícia" className="rounded-t-md" />
      <div className="p-5">
        <h4 className="text-lighter-gray font-bold text-xl mb-2">{titulo}</h4>
        <p className="text-light-gray line-clamp-5 font-semibold">
          {descricao}
        </p>

        <div className="h-[2px] w-full bg-primary-gray my-5" />

        <span className="flex gap-5 mt-5">
          <BiCalendar className="w-5 h-5 text-lighter-gray" />
          <span className="text-light-gray">{data}</span>
        </span>
      </div>
    </div>
  );
};

export default CardNoticia;
