import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Dropdown from "../../../../components/Common/Input/Dropdown";
import SetasCarrossel from "../../../../components/Common/SetasCarrossel";
import CardCompeticao from "./CardCompeticao";

const ListagemCompeticoes = () => {
  const listagemCompeticoesRef = useRef<HTMLDivElement | null>(null);

  const { control } = useForm();

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
          />
        </div>
        <SetasCarrossel tamanhoCardPx={294} ref={listagemCompeticoesRef} />
      </div>
      <div
        className="mt-4 flex gap-5 overflow-x-scroll scrollbar-none scroll-smooth"
        ref={listagemCompeticoesRef}
      >
        {Array(9)
          .fill(0)
          .map(() => (
            <CardCompeticao
              key={Math.random()}
              nome="Comp das lendas"
              jogo="Free fire"
              valor={200}
              numParticipantes={5}
            />
          ))}
      </div>
    </>
  );
};

export default ListagemCompeticoes;
