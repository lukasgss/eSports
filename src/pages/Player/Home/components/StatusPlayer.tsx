import React from "react";
import { useQuery } from "@tanstack/react-query";
import { obterDadosPlayer } from "../../../../services/Api";

import playerImageStatus from "../../../../assets/img/playerImageStatus.png";
import "../index.scss";

interface DadosPlayer {
  nickname: string;
  vitorias: number;
  empates: number;
  derrotas: number;
  totalJogos: number;
  campeonatos: number;
}

const StatusPlayer = () => {
  const { data: dadosPlayer } = useQuery(
    ["dadosPlayer"],
    async (): Promise<DadosPlayer> => {
      const { data } = await obterDadosPlayer();
      return data;
    }
  );

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
        <h2 className="uppercase text-3xl mb-2">{dadosPlayer?.nickname}</h2>
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
          <span className="text-5xl text-[#17B51C] font-semibold">
            {dadosPlayer?.vitorias}
          </span>{" "}
          Vitórias
        </div>
        <div className="flex flex-col text-2xl text-center">
          <span className="text-5xl text-[#FFB200] font-semibold">
            {dadosPlayer?.empates}
          </span>{" "}
          Empates
        </div>
        <div className="flex flex-col text-2xl text-center">
          <span className="text-5xl text-[#FF4848] font-semibold">
            {dadosPlayer?.derrotas}
          </span>{" "}
          Derrotas
        </div>
      </div>
      <div className="text-light-gray flex flex-col gap-10 md:flex-row md:gap-36 my-10 md:my-20">
        <div className="flex flex-col text-2xl text-center">
          <span className="text-white text-5xl font-semibold">
            {dadosPlayer?.totalJogos}
          </span>{" "}
          Total de jogos
        </div>
        <div className="flex flex-col text-2xl text-center">
          <span className="text-white text-5xl font-semibold">
            {dadosPlayer?.campeonatos}
          </span>{" "}
          Campeonatos
        </div>
      </div>
    </div>
  );
};

export default StatusPlayer;
