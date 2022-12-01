import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import Breadcrumb from "../../../components/Breadcrumb";
import PlayerSidebar from "../../../components/Sidebar/PlayerSidebar";
import DropdownPerfil from "../Home/components/DropdownPerfil";
import Notificacoes from "../Home/components/Notificacoes";
import Text from "../../../components/Common/Input/Text";
import Dropdown from "../../../components/Common/Input/Dropdown";

import cardCampeonatoLeagueOfLegends from "../../../assets/img/cardCampeonatoLeagueOfLegends.png";
import cardCampeonatoDota2 from "../../../assets/img/Jogos/dota2CardCampeonato.png";
import CardCampeonato from "./components/CardCampeonato";

const Campeonatos = () => {
  const breadcrumbs = [
    {
      text: "eSports",
      link: "/",
    },
    {
      text: "Campeonatos",
    },
  ];

  const campeonatos = [
    {
      id: 1,
      imagem: cardCampeonatoLeagueOfLegends,
      titulo: "Lobas game cup",
      jogo: "League Of Legends",
    },
    {
      id: 2,
      imagem: cardCampeonatoDota2,
      titulo: "Dota game cup",
      jogo: "Dota 2",
    },
    {
      id: 3,
      imagem: cardCampeonatoLeagueOfLegends,
      titulo: "Lobas game cup",
      jogo: "League Of Legends",
    },
    {
      id: 4,
      imagem: cardCampeonatoDota2,
      titulo: "Dota game cup",
      jogo: "Dota 2",
    },
    {
      id: 5,
      imagem: cardCampeonatoDota2,
      titulo: "Dota game cup",
      jogo: "Dota 2",
    },
    {
      id: 6,
      imagem: cardCampeonatoLeagueOfLegends,
      titulo: "Lobas game cup",
      jogo: "League Of Legends",
    },
    {
      id: 7,
      imagem: cardCampeonatoDota2,
      titulo: "Dota game cup",
      jogo: "Dota 2",
    },
    {
      id: 8,
      imagem: cardCampeonatoLeagueOfLegends,
      titulo: "Lobas game cup",
      jogo: "League Of Legends",
    },
    {
      id: 9,
      imagem: cardCampeonatoDota2,
      titulo: "Dota game cup",
      jogo: "Dota 2",
    },
    {
      id: 10,
      imagem: cardCampeonatoLeagueOfLegends,
      titulo: "Lobas game cup",
      jogo: "League Of Legends",
    },
    {
      id: 11,
      imagem: cardCampeonatoDota2,
      titulo: "Dota game cup",
      jogo: "Dota 2",
    },
    {
      id: 12,
      imagem: cardCampeonatoLeagueOfLegends,
      titulo: "Lobas game cup",
      jogo: "League Of Legends",
    },
  ];

  const { register, watch, control } = useForm();

  const textoFiltradoCampeonato: string = watch("nomeCampeonato", "");

  const campeonatosFiltrados = campeonatos.filter((campeonato) =>
    campeonato.titulo
      .toLowerCase()
      .includes(textoFiltradoCampeonato.toLowerCase())
  );

  const arrDados = [
    { text: "2022", value: 1 },
    { text: "2021", value: 2 },
    { text: "2020", value: 3 },
    { text: "2019", value: 4 },
  ];

  return (
    <div className="flex bg-[#131c29] text-white">
      <PlayerSidebar />
      <div className="w-full pl-10">
        <div className="flex justify-between items-center pt-5">
          <div className="w-full flex justify-between">
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <Notificacoes />
          </div>
          <DropdownPerfil />
        </div>
        <h2 className="font-bold text-primary-pink text-5xl">Campeonatos</h2>
        <div className="mt-32 flex justify-between pr-10">
          <Text
            name="nomeCampeonato"
            register={register}
            placeholder="Digite aqui..."
            Icon={AiOutlineSearch}
            error={undefined}
          />
          <div>
            <Dropdown
              control={control}
              name="anoCampeonato"
              placeholder="Ano"
              arrDados={arrDados}
              error={undefined}
            />
          </div>
        </div>
        <div className="mt-5 flex gap-x-10 gap-y-10 flex-wrap pb-10">
          {campeonatosFiltrados.map((campeonato) => (
            <div key={campeonato.id}>
              <CardCampeonato
                imagem={campeonato.imagem}
                titulo={campeonato.titulo}
                jogo={campeonato.jogo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campeonatos;
