import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";

import Button from "../../../../components/Common/Button";

interface CardJogoProps {
  jogo: string;
  imgJogo: string;
  adversario: string;
  rodada: string;
  setIsModalPropostaHorarioOpen: Dispatch<SetStateAction<boolean>>;
}

const CardJogo = ({
  jogo,
  imgJogo,
  adversario,
  rodada,
  setIsModalPropostaHorarioOpen,
}: CardJogoProps) => {
  return (
    <div className="rounded-lg bg-primary-gray flex-none w-[350px]">
      <img
        src={imgJogo}
        className="w-full h-[180px] rounded-t"
        alt="Imagem jogo"
      />
      <span className="inline-block uppercase py-3 px-5">{jogo}</span>

      <div className="h-[2px] w-full bg-[#464646]" />

      <div className="py-3 px-5 flex flex-col">
        <div className="mb-2 flex flex-col">
          <span className="text-light-gray">NICK</span>
          <span className="text-white">{adversario}</span>
        </div>

        <span className="text-light-gray">RODADA</span>
        <div className="flex justify-between">
          <span className="text-white">{rodada}</span>
          <Link to="/saibamais" className="text-primary-pink underline">
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
          <Button action={() => setIsModalPropostaHorarioOpen(true)}>
            Mandar mensagem
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardJogo;
