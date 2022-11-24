import React, { Fragment, Dispatch, SetStateAction } from "react";
import Comunicado from "./Comunicado";
import FooterCaixaDeEntrada from "./FooterCaixaDeEntrada";
import { Notificacao } from "./types";

interface CaixaDeEntradaProps {
  notificacoes: Notificacao[];
  setNotificacoes: Dispatch<SetStateAction<Notificacao[]>>;
  setNotificacaoClicada: React.Dispatch<
    React.SetStateAction<Notificacao | null>
  >;
  setModalMobileIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CaixaDeEntrada = ({
  notificacoes,
  setNotificacoes,
  setNotificacaoClicada,
  setModalMobileIsOpen,
}: CaixaDeEntradaProps) => {
  const atualizarStatusNotificacao = (notificacao: Notificacao) => {
    const notificacoesStatusAtualizado = notificacoes.map((comunicado) =>
      comunicado.id === notificacao.id
        ? { ...comunicado, lido: true }
        : comunicado
    );
    setNotificacoes(notificacoesStatusAtualizado);
  };

  return (
    <div className="bg-primary-gray p-5 w-full md:w-1/2 max-w-xl rounded-b-md">
      <h2 className="text-center text-white text-4xl my-2">Caixa de entrada</h2>
      <div className="bg-[#464646] w-full h-1 rounded-xl" />
      <div className="mt-5">
        {notificacoes.map((notificacao, idx) => (
          <Fragment key={notificacao.id}>
            <Comunicado
              notificacao={notificacao}
              atualizarStatusNotificacao={atualizarStatusNotificacao}
              setModalMobileIsOpen={setModalMobileIsOpen}
              setNotificacaoClicada={setNotificacaoClicada}
            />
            {idx !== notificacoes.length - 1 ? (
              <div className="w-full h-[2px] bg-[#464646] my-2.5" />
            ) : null}
          </Fragment>
        ))}

        <FooterCaixaDeEntrada notificacoes={notificacoes} />
      </div>
    </div>
  );
};

export default CaixaDeEntrada;
