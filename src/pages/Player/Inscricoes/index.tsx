import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import PlayerSidebar from "../../../components/Sidebar/PlayerSidebar";
import DropdownPerfil from "../Home/components/DropdownPerfil";
import Notificacoes from "../Home/components/Notificacoes";
import ListagemCompeticoes from "./components/ListagemCompeticoes";
import ListagemEmBreve from "./components/ListagemEmBreve";

const Inscricoes = () => {
  const breadcrumb = [
    {
      text: "eSports",
      link: "/",
    },
    {
      text: "Inscrições",
    },
  ];

  return (
    <div className="flex">
      <PlayerSidebar />
      <div className="pl-10 bg-primary-blue w-full">
        <div className="flex mt-5">
          <div className="flex w-full justify-between">
            <div className="hidden sm:block">
              <Breadcrumb breadcrumbs={breadcrumb} />
            </div>
            <Notificacoes />
          </div>
          <DropdownPerfil />
        </div>
        <h2 className="text-primary-pink font-bold text-5xl mt-8 mb-16">
          Inscrições
        </h2>
        <ListagemCompeticoes />
        <ListagemEmBreve />
      </div>
    </div>
  );
};

export default Inscricoes;
