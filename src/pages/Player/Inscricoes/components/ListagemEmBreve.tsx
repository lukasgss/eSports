import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Dropdown from "../../../../components/Common/Input/Dropdown";
import CardCompeticao from "./CardCompeticao";
import SetasCarrossel from "../../../../components/Common/SetasCarrossel";
import { CompeticaoInscricao } from "../../../../services/CommonTypes";
import { obterCompeticoesEmBreve } from "../../../../services/Api";

const ListagemEmBreve = () => {
  const listagemEmBreveRef = useRef<HTMLDivElement | null>(null);

  const { control } = useForm();

  const { data: competicoesEmBreve } = useQuery(
    ["competicoesEmBreve"],
    async (): Promise<CompeticaoInscricao[]> => {
      const { data } = await obterCompeticoesEmBreve();
      return data;
    }
  );

  return (
    <>
      <div className="flex justify-between items-center pr-5 flex-none mt-8">
        <div className="flex items-center gap-5">
          <h2 className="text-[#bbb] text-3xl font-bold w-fit whitespace-nowrap">
            Em breve
          </h2>
          <Dropdown
            name="terminoInscricoes"
            control={control}
            placeholder="Término das inscrições"
            arrDados={[
              { text: "7 dias", value: 1 },
              { text: "15 dias", value: 2 },
              { text: "1 mês ou mais", value: 3 },
            ]}
            error={undefined}
          />
          <Dropdown
            name="jogos"
            control={control}
            placeholder="Jogos"
            arrDados={[
              { text: "Fifa 22", value: 1 },
              { text: "Free Fire", value: 2 },
              { text: "League of Legends", value: 3 },
            ]}
            error={undefined}
          />
          <Dropdown
            name="participantes"
            control={control}
            placeholder="Participantes"
            arrDados={[
              { text: "0 - 10", value: 1 },
              { text: "11 - 25", value: 2 },
              { text: "26 - 50", value: 3 },
              { text: "mais de 50", value: 4 },
            ]}
            error={undefined}
          />
        </div>
        <SetasCarrossel tamanhoCardPx={294} ref={listagemEmBreveRef} />
      </div>
      <div
        className="mt-4 flex gap-5 pb-5 overflow-x-scroll scrollbar-none scroll-smooth"
        ref={listagemEmBreveRef}
      >
        {competicoesEmBreve?.length &&
          competicoesEmBreve.map((competicao) => (
            <CardCompeticao
              key={competicao.id}
              nome={competicao.nome}
              jogo={competicao.jogo}
              valor={competicao.valor}
              numParticipantes={competicao.participantes}
              emBreve
            />
          ))}
      </div>
    </>
  );
};

export default ListagemEmBreve;
