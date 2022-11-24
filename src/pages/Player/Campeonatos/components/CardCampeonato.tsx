import React from "react";
import Button from "../../../../components/Common/Button";

interface CardCampeonatoProps {
  imagem: string;
  titulo: string;
  jogo: string;
}

const CardCampeonato = ({ imagem, titulo, jogo }: CardCampeonatoProps) => {
  return (
    <div className="bg-primary-gray rounded-md h-full">
      <img
        src={imagem}
        alt="Imagem campeonato"
        className="rounded-t-md w-full"
      />
      <div className="flex justify-between items-center p-3">
        <div className="flex flex-col justify-around">
          <span className="font-bold">{titulo}</span>
          <span>{jogo}</span>
        </div>
        <div>
          <Button>Saiba mais</Button>
        </div>
      </div>
    </div>
  );
};

export default CardCampeonato;
