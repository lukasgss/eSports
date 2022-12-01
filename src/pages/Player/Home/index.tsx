import React, { useState } from "react";
import PlayerSidebar from "../../../components/Sidebar/PlayerSidebar";
import FeedNoticias from "./components/FeedNoticias";
import IntroHome from "./components/IntroHome";
import ListagemCampeonatos from "./components/ListagemCampeonatos";
import ListagemJogosDisponiveis from "./components/ListagemJogosDisponiveis";
import ModalPropostaHorario from "./components/ModalPropostaHorario";
import StatusPlayer from "./components/StatusPlayer";

import "./index.scss";

const HomePlayer = () => {
  const [isModalPropostaHorarioOpen, setIsModalPropostaHorarioOpen] =
    useState(false);

  return (
    <>
      <div className="flex bg-darker-blue pb-5">
        <PlayerSidebar />
        <div className="w-full overflow-hidden">
          <IntroHome />
          <div className="w-full overflow-hidden pl-10 pr-6">
            <ListagemCampeonatos />
            <ListagemJogosDisponiveis
              setIsModalPropostaHorarioOpen={setIsModalPropostaHorarioOpen}
            />
            <div className="flex flex-col lg:flex-row lg:gap-5">
              <StatusPlayer />
              <FeedNoticias />
            </div>
          </div>
        </div>
      </div>
      {isModalPropostaHorarioOpen ? (
        <ModalPropostaHorario
          isOpen={isModalPropostaHorarioOpen}
          setIsOpen={setIsModalPropostaHorarioOpen}
        />
      ) : null}
    </>
  );
};

export default HomePlayer;
