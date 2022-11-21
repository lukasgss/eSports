import React from "react";
import Button from "../../../../components/Common/Button";

import "./index.scss";

interface ConteudoMensagemProps {
  isModal: boolean;
  assunto: string;
  data: string;
  playerImage: string;
  remetente: string;
  mensagem: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConteudoMensagem = ({
  isModal,
  assunto,
  data,
  playerImage,
  remetente,
  mensagem,
  setIsModalOpen,
}: ConteudoMensagemProps) => {
  return (
    <div className="bg-primary-gray p-7 rounded-b-md">
      <div className="flex items-center justify-between">
        <span
          className={`${
            isModal ? "mb-4" : ""
          } text-primary-pink font-bold text-5xl`}
        >
          {assunto}
        </span>
        {!isModal ? (
          <span className="text-light-gray text-2xl font-bold">{data}</span>
        ) : null}
      </div>
      <div className="flex items-center gap-5">
        <img
          src={playerImage}
          alt="Imagem jogador"
          className={`rounded-full ${isModal ? "w-12" : "w-20"}`}
        />
        <div className="dadosRemetenteEData w-full justify-between">
          <span className="font-bold text-3xl">{remetente}</span>
          <span className="text-light-gray text-2xl font-bold">{data}</span>
        </div>
      </div>
      <div className="h-[3px] w-full rounded my-4 bg-[#464646]" />
      <p className="font-semibold text-[#bbb]">{mensagem}</p>
      {isModal ? (
        <div className="w-1/3 mt-8 ml-auto">
          <Button action={() => setIsModalOpen(false)}>Fechar</Button>
        </div>
      ) : null}
    </div>
  );
};

export default ConteudoMensagem;
