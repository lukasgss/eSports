import React from "react";

interface ICardOrganizacaoProps {
  imagem: string;
}

const CardOrganizacao = ({ imagem }: ICardOrganizacaoProps) => {
  return (
    <div
      className="flex items-center justify-center px-14 py-10 border-[5px] border-[#2C333E]
     bg-[#1D252F] hover:brightness-125 h-full"
    >
      <img className="w-32" src={imagem} alt="Imagem equipe eSports" />
    </div>
  );
};

export default CardOrganizacao;
