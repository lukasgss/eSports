import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import cardCampeonatoFreeFire from "../../../../assets/img/Jogos/freeFireCardJogo.png";
import Button from "../../../../components/Common/Button";

interface ICardCompeticaoProps {
  nome: string;
  jogo: string;
  valor: string;
  numParticipantes: number;
  emBreve?: boolean;
}

const CardCompeticao = ({
  nome,
  jogo,
  valor,
  numParticipantes,
  emBreve = false,
}: ICardCompeticaoProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary-gray text-white rounded w-fit pb-2 flex-none">
      <img src={cardCampeonatoFreeFire} alt="Imagem competição" />
      <div className="px-4">
        <span className="inline-block text-xl my-4">{nome}</span>
      </div>

      <div className="h-[2px] bg-[#464646] w-full" />

      <div className="px-4 mt-2">
        <div className="mb-2">
          <span className="block text-light-gray">Jogo: </span>
          <span>{jogo}</span>
        </div>

        <div className="mb-2">
          <span className="block text-light-gray">Por equipe (R$):</span>
          <span>{valor}</span>
        </div>

        <div className="mb-2">
          <span className="block text-light-gray">Participantes:</span>
          <span>{numParticipantes}</span>
        </div>
      </div>
      <div className="h-[2px] bg-[#464646] w-full" />
      <div className="px-4 leading-7">
        <span className="block text-light-gray">
          {emBreve ? "Início das inscrições" : "Término das inscrições"}
        </span>
        <div
          className={`flex items-center gap-1.5 ${
            emBreve ? "text-primary-green" : "text-primary-red"
          }`}
        >
          <AiOutlineClockCircle className="w-5 h-5" />
          <span>21H 32M 22S</span>
        </div>
      </div>
      <div className="mt-3 mb-2 px-4">
        <Button
          action={() =>
            navigate("/realizar-inscricoes", { state: { nome, valor } })
          }
        >
          Inscrição
        </Button>
      </div>
    </div>
  );
};

export default CardCompeticao;
