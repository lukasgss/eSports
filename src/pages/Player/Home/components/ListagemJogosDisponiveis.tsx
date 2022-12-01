import React, { Dispatch, SetStateAction, useRef } from "react";
import { useForm } from "react-hook-form";
import Dropdown from "../../../../components/Common/Input/Dropdown";
import CardJogo from "./CardJogo";

import imgFreeFire from "../../../../assets/img/Jogos/leagueOfLegendsCardCampeonato.png";
import imgFifa from "../../../../assets/img/Jogos/fifaCardCampeonato.png";
import SetasCarrossel from "../../../../components/Common/SetasCarrossel";

interface IListagemJogosDisponiveisProps {
  setIsModalPropostaHorarioOpen: Dispatch<SetStateAction<boolean>>;
}

const ListagemJogosDisponiveis = ({
  setIsModalPropostaHorarioOpen,
}: IListagemJogosDisponiveisProps) => {
  const listagemJogosRef = useRef<HTMLDivElement | null>(null);

  const { control } = useForm();

  return (
    <section
      aria-labelledby="jogosDisponiveisHomePlayer"
      className="text-white mt-10"
    >
      <header className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <h2
            id="jogosDisponiveisHomePlayer"
            className="text-3xl font-bold whitespace-nowrap"
          >
            Jogos disponíveis
          </h2>
          <Dropdown
            name="jogos"
            control={control}
            placeholder="Término do campeonato"
            arrDados={[
              { text: "7 dias", value: 1 },
              { text: "15 dias", value: 2 },
              { text: "1 mês ou mais", value: 3 },
            ]}
            error={undefined}
          />
          <Dropdown
            name="categoria"
            control={control}
            placeholder="Todos"
            arrDados={[
              { text: "Todos", value: 1 },
              { text: "Mensagem", value: 2 },
              { text: "Partida marcada", value: 3 },
            ]}
            error={undefined}
          />
        </div>
        <SetasCarrossel tamanhoCardPx={350} ref={listagemJogosRef} />
      </header>
      <div
        className="mt-5 flex gap-5 overflow-x-scroll scrollbar-none scroll-smooth"
        ref={listagemJogosRef}
      >
        {new Array(5).fill(0).map((_elemento, idx) => (
          <CardJogo
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            imgJogo={idx % 2 === 0 ? imgFreeFire : imgFifa}
            setIsModalPropostaHorarioOpen={setIsModalPropostaHorarioOpen}
          />
        ))}
      </div>
    </section>
  );
};

export default ListagemJogosDisponiveis;
