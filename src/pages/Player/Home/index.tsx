import React from "react";
import PlayerSidebar from "../../../components/Sidebar/PlayerSidebar";
import FeedNoticias from "./components/FeedNoticias";
import IntroHome from "./components/IntroHome";
import ListagemCampeonatos from "./components/ListagemCampeonatos";
import ListagemJogosDisponiveis from "./components/ListagemJogosDisponiveis";
import StatusPlayer from "./components/StatusPlayer";

import "./index.scss";

const HomePlayer = () => {
  return (
    <div className="flex bg-darker-blue pb-5">
      <PlayerSidebar />
      <div className="w-full overflow-hidden">
        <IntroHome />
        <div className="w-full overflow-hidden pl-10 pr-6">
          <ListagemCampeonatos />
          <ListagemJogosDisponiveis />
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <StatusPlayer />
            <FeedNoticias />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePlayer;
