import React, { Dispatch, SetStateAction } from "react";
import { Notificacao } from "./types";

interface INotificacaoProps {
  notificacao: Notificacao;
  atualizarStatusNotificacao: (notificacao: Notificacao) => void;
  setModalMobileIsOpen: Dispatch<SetStateAction<boolean>>;
  setNotificacaoClicada: Dispatch<SetStateAction<Notificacao | null>>;
}

const Comunicado = ({
  notificacao,
  atualizarStatusNotificacao,
  setModalMobileIsOpen,
  setNotificacaoClicada,
}: INotificacaoProps) => {
  return (
    <button
      type="button"
      onClick={() => {
        atualizarStatusNotificacao(notificacao);
        setModalMobileIsOpen((valorAnterior) => !valorAnterior);
        setNotificacaoClicada(notificacao);
      }}
      className="relative text-left hover:bg-[#404854]"
    >
      <div>
        <div className="flex gap-3">
          <span className="font-bold">{notificacao.remetente}</span>
          {!notificacao.lido ? (
            <span className="px-1 py-[2px] bg-primary-pink rounded-lg">
              novo
            </span>
          ) : null}
        </div>
        <div className="flex flex-col">
          <span className="text-primary-pink font-semibold">
            {notificacao.assunto}
          </span>
          <span className="text-light-gray truncate">
            {notificacao.mensagem}
          </span>
        </div>
      </div>
      <div className="absolute top-1/4 right-4">{notificacao.data}</div>
    </button>
  );
};

export default Comunicado;
