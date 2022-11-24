import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../../../../components/Common/Button";
import { Notificacao } from "./types";

interface IFooterCaixaDeEntradaProps {
  notificacoes: Notificacao[];
}

const FooterCaixaDeEntrada = ({ notificacoes }: IFooterCaixaDeEntradaProps) => {
  return (
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
  );
};

export default FooterCaixaDeEntrada;
