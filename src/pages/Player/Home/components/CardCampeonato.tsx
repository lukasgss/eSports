import React from "react";
import Button from "../../../../components/Common/Button";

interface CardCampeonatoProps {
  organizador: string;
  jogo: string;
  imagem: string;
}

const CardCampeonato = ({ organizador, jogo, imagem }: CardCampeonatoProps) => {
  return (
    <div className="rounded-lg bg-primary-gray flex-none w-[300px] lg:w-[350px]">
      <img src={imagem} className="w-full" alt="imagem jogo do campeonato" />
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex flex-col">
          <span className="font-bold">{organizador}</span>
          <span className="text-sm">{jogo}</span>
        </div>
        <div>
          <Button>Saiba mais</Button>
        </div>
      </div>
    </div>
  );
};

export default CardCampeonato;
