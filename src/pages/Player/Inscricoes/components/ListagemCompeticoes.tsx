import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Dropdown from "../../../../components/Common/Input/Dropdown";
import SetasCarrossel from "../../../../components/Common/SetasCarrossel";
import CardCompeticao from "./CardCompeticao";
import { obterCompeticoesInscricao } from "../../../../services/Api";
import { CompeticaoInscricao } from "../../../../services/CommonTypes";

const ListagemCompeticoes = () => {
  const listagemCompeticoesRef = useRef<HTMLDivElement | null>(null);

  const { control } = useForm();

  const { data: competicoesInscricao } = useQuery(
    ["competicoesInscricao"],
    async (): Promise<CompeticaoInscricao[]> => {
      const { data } = await obterCompeticoesInscricao();
      return data;
    }
  );

  return (
    <>
      <div className="flex justify-between items-center pr-5">
        <div className="flex items-center gap-5">
          <h2 className="font-bold text-lighter-gray text-3xl text-[#bbb]">
            Competições
          </h2>
          <Dropdown
            name="terminoInscricoes"
            placeholder="Término das inscrições"
            control={control}
            arrDados={[
              { text: "7 dias", value: 1 },
              { text: "15 dias", value: 2 },
              { text: "1 mês ou mais", value: 3 },
            ]}
            error={undefined}
          />
          <Dropdown
            name="jogos"
            placeholder="Jogos"
            control={control}
            arrDados={[
              { text: "FIFA 22", value: 1 },
              { text: "Free Fire", value: 2 },
              { text: "League of Legends", value: 3 },
            ]}
            error={undefined}
          />
          <Dropdown
            name="participantes"
            placeholder="Participantes"
            control={control}
            arrDados={[
              { text: "0 - 10", value: 1 },
              { text: "11 - 25", value: 2 },
              { text: "26 - 50", value: 3 },
              { text: "mais de 50", value: 4 },
            ]}
            error={undefined}
          />
        </div>
        <SetasCarrossel tamanhoCardPx={294} ref={listagemCompeticoesRef} />
      </div>
      <div
        className="mt-4 flex gap-5 overflow-x-scroll scrollbar-none scroll-smooth"
        ref={listagemCompeticoesRef}
      >
        {competicoesInscricao?.length &&
          competicoesInscricao.map((competicao) => (
            <CardCompeticao
              key={competicao.id}
              jogo={competicao.jogo}
              nome={competicao.nome}
              numParticipantes={competicao.participantes}
              valor={competicao.valor}
            />
          ))}
      </div>
    </>
  );
};

export default ListagemCompeticoes;
