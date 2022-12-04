import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import Breadcrumb from "../../../components/Breadcrumb";
import PlayerSidebar from "../../../components/Sidebar/PlayerSidebar";
import DropdownPerfil from "../Home/components/DropdownPerfil";
import Notificacoes from "../Home/components/Notificacoes";
import Text from "../../../components/Common/Input/Text";
import Dropdown from "../../../components/Common/Input/Dropdown";
import { Campeonato } from "../../../services/CommonTypes";
import CardCampeonato from "./components/CardCampeonato";
import { obterListaCampeonatos } from "../../../services/Api";
import DadosNaoEncontrados from "../../../components/Common/DadosNaoEncontrados";

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

  const { data: campeonatos } = useQuery(
    ["campeonatos"],
    async (): Promise<Campeonato[]> => {
      const { data } = await obterListaCampeonatos();
      return data;
    }
  );

  const { register, watch, control } = useForm();

  const textoFiltradoCampeonato: string = watch("nomeCampeonato", "");

  const campeonatosFiltrados = campeonatos?.filter((campeonato) =>
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
        <div className="mt-5 flex gap-x-5 gap-y-10 flex-wrap pb-10">
          {campeonatosFiltrados?.length ? (
            campeonatosFiltrados.map((campeonato) => (
              <div key={campeonato.id}>
                <CardCampeonato
                  imagem={campeonato.imagem}
                  titulo={campeonato.titulo}
                  jogo={campeonato.jogo}
                />
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center mt-10">
              <DadosNaoEncontrados item="campeonato" itemMasculino />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Campeonatos;
