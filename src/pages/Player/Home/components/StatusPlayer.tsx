import React from "react";

import playerImageStatus from "../../../../assets/img/playerImageStatus.png";
import "../index.scss";

const StatusPlayer = () => {
  return (
    <div className="w-full mt-5 flex flex-col items-center text-white bg-primary-gray rounded">
      <div className="w-full h-[200px]">
        <div className="playerStatus h-2/3 rounded-t" />
        <div className="mt-[-56px] flex justify-center">
          <img
            className="rounded-full w-28"
            src={playerImageStatus}
            alt="Foto de perfil"
          />
        </div>
      </div>

      <div className="text-center flex flex-col">
        <h2 className="uppercase text-3xl mb-2">Macaco louco</h2>
        <a
          href="https://esports.com.br"
          target="_blank"
          rel="noreferrer nofollow"
        >
          https://esports.com.br
        </a>
      </div>

      <div className="text-light-gray flex flex-col md:flex-row justify-center gap-10 md:gap-36 mt-10">
        <div className="flex flex-col text-2xl text-center">
          <span className="text-5xl text-[#17B51C] font-semibold">4</span>{" "}
          Vitórias
        </div>
        <div className="flex flex-col text-2xl text-center">
          <span className="text-5xl text-[#FFB200] font-semibold">3</span>{" "}
          Empates
        </div>
        <div className="flex flex-col text-2xl text-center">
          <span className="text-5xl text-[#FF4848] font-semibold">3</span>{" "}
          Derrotas
        </div>
      </div>
      <div className="text-light-gray flex flex-col gap-10 md:flex-row md:gap-36 my-10 md:my-20">
        <div className="flex flex-col text-2xl text-center">
          <span className="text-white text-5xl font-semibold">10</span> Total de
          jogos
        </div>
        <div className="flex flex-col text-2xl text-center">
          <span className="text-white text-5xl font-semibold">2</span>{" "}
          Campeonatos
        </div>
      </div>
    </div>
  );
};

export default StatusPlayer;
