import React from "react";

import dadosNaoEncontradosImg from "../../../assets/img/FetchDados/dadosNaoEncontrados.png";

interface DadosNaoEncontradosProps {
  itemMasculino: boolean;
  item: string;
}

const DadosNaoEncontrados = ({
  itemMasculino,
  item,
}: DadosNaoEncontradosProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        className="w-72"
        src={dadosNaoEncontradosImg}
        alt="Ícone dados não encontrados"
      />
      <span className="text-light-gray font-bold text-2xl">
        Oops... Nenhum {item} {itemMasculino ? "encontrado" : "encontrada"}
      </span>
    </div>
  );
};

export default DadosNaoEncontrados;
