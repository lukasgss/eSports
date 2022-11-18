import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";

import Button from "../../../../components/Common/Button";

interface CardJogoProps {
  imgJogo: string;
}

const CardJogo = ({ imgJogo }: CardJogoProps) => {
  return (
    <div className="rounded-lg bg-primary-gray flex-none w-[350px]">
      <img
        src={imgJogo}
        className="w-full h-[180px] rounded-t"
        alt="Imagem jogo"
      />
      <span className="inline-block uppercase py-3 px-5">Free fire</span>

      <div className="h-[2px] w-full bg-[#464646]" />

      <div className="py-3 px-5 flex flex-col">
        <div className="mb-2 flex flex-col">
          <span className="text-light-gray">NICK</span>
          <span className="text-white">Guizada0511</span>
        </div>

        <span className="text-light-gray">RODADA</span>
        <div className="flex justify-between">
          <span className="text-white">Mata-mata 1</span>
          <Link to="#" className="text-primary-pink underline">
            Saiba mais
          </Link>
        </div>
      </div>

      <div className="h-[2px] w-full bg-[#464646]" />

      <div className="px-5">
        <span className="inline-block text-[#FF4848] pt-1">
          Limite para o agendamento
        </span>
        <div className="flex gap-2 pt-2 pb-4">
          <AiOutlineClockCircle className="w-6 h-6 text-[#ff4848]" />
          <span className="text-[#ff4848]">21H 32M 22S</span>
        </div>
        <div className="pb-4">
          <Button>Mandar mensagem</Button>
        </div>
      </div>
    </div>
  );
};

export default CardJogo;
