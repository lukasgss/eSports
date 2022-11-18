import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import Dropdown from "../../../../components/Common/Input/Dropdown";
import { useForm } from "react-hook-form";
import CardJogo from "./CardJogo";

import imgFreeFire from "../../../../assets/img/Jogos/leagueOfLegendsCardCampeonato.png";
import imgFifa from "../../../../assets/img/Jogos/fifaCardCampeonato.png";

const ListagemJogosDisponiveis = () => {
  const { control } = useForm();

  return (
    <section
      aria-labelledby="jogosDisponiveisHomePlayer"
      className="text-white mt-10"
    >
      <header className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <h2 id="jogosDisponiveisHomePlayer" className="text-3xl font-bold">
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
          />
        </div>
        <div className="flex justify-between items-center gap-2 mt-5 lg:mt-0">
          <button type="button" className="bg-primary-gray p-3 w-12 h-12">
            <span className="text-light-gray">
              <IoIosArrowUp className="w-6 h-6 rotate-[270deg]" />
            </span>
          </button>
          <button type="button" className="bg-primary-gray p-3 w-12 h-12">
            <span className="text-light-gray">
              <IoIosArrowUp className="w-6 h-6 rotate-90" />
            </span>
          </button>
        </div>
      </header>
      <div className="mt-5 flex gap-5">
        {new Array(5).fill(0).map((_elemento, idx) => (
          <CardJogo key={idx} imgJogo={imgFreeFire} />
        ))}
      </div>
    </section>
  );
};

export default ListagemJogosDisponiveis;
