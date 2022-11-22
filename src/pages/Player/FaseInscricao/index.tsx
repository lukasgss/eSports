import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Button from "../../../components/Common/Button";
import PlayerSidebar from "../../../components/Sidebar/PlayerSidebar";
import Notificacoes from "../Home/components/Notificacoes";
import FormularioSuporte from "./components/FormularioSuporte";
import InformacoesCompeticao from "./components/InformacoesCompeticao";
import Requisitos from "./components/Requisitos";

import "./index.scss";

const FaseInscricao = () => {
  const [abaInformacoesAberta, setAbaInformacoesAberta] = useState(true);

  const {
    state: { nome },
  } = useLocation();

  const breadcrumb = [
    { text: "eSports", link: "/" },
    { text: "Inscrições", link: "/inscricoes" },
    { text: "Fase de inscrição" },
  ];

  return (
    <div className="flex">
      <PlayerSidebar />
      <div className="paginaInscricoes pl-5 md:pl-10 w-full text-white">
        <div className="flex justify-between">
          <div className="hidden sm:block">
            <Breadcrumb breadcrumbs={breadcrumb} />
          </div>
          <Notificacoes />
        </div>
        <h2 className="text-primary-pink font-bold text-5xl my-8">
          Fase de inscrição
        </h2>
        <div className="flex flex-col md:flex-row gap-5 md:pr-5">
          <div className="pr-5 w-full">
            <div className="mt-5 bg-primary-gray">
              <div className="flex justify-between p-6">
                <h2 className="text-4xl font-bold">{nome}</h2>
                <Button>Baixar regulamento</Button>
              </div>
            </div>
            <div className="w-full bg-[#464646] h-[2px]" />

            <div className="flex w-full bg-primary-gray">
              <button
                type="button"
                onClick={() => setAbaInformacoesAberta(true)}
                className={`${
                  abaInformacoesAberta
                    ? "border-primary-pink border-b-[3px]"
                    : ""
                } w-full p-4 hover:bg-[#2a323f]`}
              >
                <span className="text-xl m-auto">Informações</span>
              </button>
              <button
                type="button"
                onClick={() => setAbaInformacoesAberta(false)}
                className={`${
                  !abaInformacoesAberta
                    ? "border-primary-pink border-b-[3px]"
                    : ""
                } w-full p-6 hover:bg-[#2a323f]`}
              >
                <span className="m-auto text-xl">Suporte</span>
              </button>
            </div>
            {abaInformacoesAberta ? (
              <InformacoesCompeticao />
            ) : (
              <FormularioSuporte />
            )}
          </div>
          <Requisitos />
        </div>
      </div>
    </div>
  );
};

export default FaseInscricao;
