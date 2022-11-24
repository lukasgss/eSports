import React, { useRef } from "react";
import SetasCarrossel from "../../../../components/Common/SetasCarrossel";
import CardCampeonato from "../../Campeonatos/components/CardCampeonato";

import imgCampeonatoLeagueOfLegends from "../../../../assets/img/Jogos/leagueOfLegendsCardCampeonato.png";
import imgCampeonatoFreeFire from "../../../../assets/img/Jogos/imgCardFreefire.jpeg";
import imgCampeonatoCsgo from "../../../../assets/img/Jogos/imgCardCsgo.jpg";
import imgCampeonatoF122 from "../../../../assets/img/Jogos/imgCardF122.jpg";
import imgCampeonatoFifa23 from "../../../../assets/img/Jogos/imgCardFifa23.jpg";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";

const ProximasCompeticoes = () => {
  const scrollCompeticoesRef = useRef<HTMLDivElement | null>(null);
  const dimensaoJanela = useWindowDimensions();

  const competicoes = [
    { id: 1, imagem: imgCampeonatoLeagueOfLegends },
    { id: 2, imagem: imgCampeonatoFreeFire },
    { id: 3, imagem: imgCampeonatoCsgo },
    { id: 4, imagem: imgCampeonatoFifa23 },
    { id: 5, imagem: imgCampeonatoF122 },
    { id: 6, imagem: imgCampeonatoLeagueOfLegends },
    { id: 7, imagem: imgCampeonatoFreeFire },
    { id: 8, imagem: imgCampeonatoF122 },
    { id: 9, imagem: imgCampeonatoFifa23 },
    { id: 10, imagem: imgCampeonatoCsgo },
    { id: 11, imagem: imgCampeonatoFreeFire },
  ];

  return (
    <div className="pt-5 pb-8">
      <div className="grid grid-cols-0 grid-rows-2 place-items-center lg:grid-cols-3 lg:grid-rows-1">
        <div className="text-center lg:col-start-2">
          <span className="text-light-gray font-bold text-3xl">Próximas</span>
          <h3 className="text-primary-pink text-5xl font-bold">Competições</h3>
        </div>
        <div className="w-fit lg:w-auto flex items-center justify-center px-8 lg:col-start-3 lg:justify-end">
          <SetasCarrossel
            ref={scrollCompeticoesRef}
            tamanhoCardPx={dimensaoJanela < 1024 ? 288 : 400}
          />
        </div>
      </div>
      <div
        className="mt-8 flex flex-row gap-5 flex-wrap-none text-white pl-5 overflow-x-scroll scrollbar-none scroll-smooth"
        ref={scrollCompeticoesRef}
      >
        {competicoes.map((competicao) => (
          <div
            key={competicao.id}
            className="w-72 h-auto lg:w-[400px] flex-none"
          >
            <CardCampeonato
              imagem={competicao.imagem}
              titulo="Lobas game Cup"
              jogo="League of Legends"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProximasCompeticoes;
