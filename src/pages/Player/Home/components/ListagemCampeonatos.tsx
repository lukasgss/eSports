import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Dropdown, {
  DadosDropdown,
} from "../../../../components/Common/Input/Dropdown";
import CardCampeonato from "./CardCampeonato";

import imgLeagueOfLegends from "../../../../assets/img/Jogos/leagueOfLegendsCardCampeonato.png";
import imgDota2 from "../../../../assets/img/Jogos/dota2CardCampeonato.png";
import SetasCarrossel from "../../../../components/Common/SetasCarrossel";

interface FormCampeonatosFields {
  terminoCampeonato: DadosDropdown;
  jogos: DadosDropdown;
}

const ListagemCampeonatos = () => {
  const listagemCampeonatoRef = useRef<HTMLDivElement | null>(null);

  const campeonatosCadastrados = [
    {
      id: 1,
      titulo: "Jester game cup1",
      jogo: "League of Legends",
      imagem: imgLeagueOfLegends,
    },
    {
      id: 2,
      titulo: "Lendas do Dota2",
      jogo: "Dota 2",
      imagem: imgDota2,
    },
    {
      id: 3,
      titulo: "Jester game cup3",
      jogo: "League of Legends",
      imagem: imgLeagueOfLegends,
    },
    {
      id: 4,
      titulo: "Lendas do Dota4",
      jogo: "Dota 2",
      imagem: imgDota2,
    },
    {
      id: 5,
      titulo: "Lendas do Dota5",
      jogo: "Dota 2",
      imagem: imgDota2,
    },
  ];

  const { control } = useForm<FormCampeonatosFields>();

  return (
    <section
      aria-labelledby="campeonatosHomePlayer"
      className="text-white mt-10"
    >
      <header className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <h2 id="campeonatosHomePlayer" className="text-3xl font-bold">
            Campeonatos
          </h2>
          <Dropdown
            name="terminoCampeonato"
            control={control}
            placeholder="Término do campeonato"
            arrDados={[
              { text: "7 dias", value: 1 },
              { text: "15 dias", value: 2 },
              { text: "1 mês ou mais", value: 3 },
            ]}
          />
          <Dropdown
            name="jogos"
            control={control}
            placeholder="Jogos"
            arrDados={[
              { text: "CS:GO", value: 1 },
              { text: "FIFA 22", value: 2 },
              { text: "FREE FIRE", value: 3 },
              { text: "LEAGUE OF LEGENDS", value: 4 },
              { text: "DOTA 2", value: 5 },
            ]}
          />
        </div>
        <SetasCarrossel tamanhoCardPx={350} ref={listagemCampeonatoRef} />
      </header>
      <div
        className="flex gap-5 mt-5 flex-nowrap overflow-x-scroll scroll-smooth scrollbar-none"
        ref={listagemCampeonatoRef}
      >
        {campeonatosCadastrados.map((campeonato, idx) => (
          <CardCampeonato
            key={campeonato.id}
            organizador={campeonato.titulo}
            jogo={campeonato.jogo}
            imagem={campeonato.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default ListagemCampeonatos;
