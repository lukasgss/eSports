import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../../../../components/Common/Button";
import { Notificacao } from "./types";

interface CaixaDeEntradaProps {
  notificacoes: Notificacao[];
  setNotificacaoClicada: React.Dispatch<
    React.SetStateAction<Notificacao | null>
  >;
  setModalMobileIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CaixaDeEntrada = ({
  notificacoes,
  setNotificacaoClicada,
  setModalMobileIsOpen,
}: CaixaDeEntradaProps) => {
  return (
    <div className="bg-primary-gray p-5 w-full md:w-1/2 max-w-xl rounded-b-md">
      <h2 className="text-center text-white text-4xl my-2">Caixa de entrada</h2>
      <div className="bg-[#464646] w-full h-1 rounded-xl" />
      <div className="mt-5">
        {notificacoes.map((notificacao, idx) => (
          <React.Fragment key={notificacao.id}>
            <button
              type="button"
              onClick={() => {
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
            {idx !== notificacoes.length - 1 ? (
              <div className="w-full h-[2px] bg-[#464646] my-2.5" />
            ) : null}
          </React.Fragment>
        ))}
        <div className="flex gap-3 items-center justify-end w-full mt-10">
          <span className="text-lighter-gray">
            1 - {notificacoes.length} de {notificacoes.length}
          </span>
          <div className="flex gap-2.5">
            <Button>
              <IoIosArrowBack className="w-6 h-6 text-white" />
            </Button>
            <Button>
              <IoIosArrowForward className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaixaDeEntrada;
