import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Dropdown, {
  DadosDropdown,
} from "../../../../components/Common/Input/Dropdown";
import CardCampeonato from "./CardCampeonato";
import SetasCarrossel from "../../../../components/Common/SetasCarrossel";
import { obterListagemCampeonatosCadastrados } from "../../../../services/Api";
import { Campeonato } from "../../../../services/CommonTypes";

interface FormCampeonatosFields {
  terminoCampeonato: DadosDropdown | null;
  jogos: DadosDropdown | null;
}

const ListagemCampeonatos = () => {
  const listagemCampeonatoRef = useRef<HTMLDivElement | null>(null);

  const { data: campeonatosCadastrados } = useQuery(
    ["campeonatosCadastrados"],
    async (): Promise<Campeonato[]> => {
      const { data } = await obterListagemCampeonatosCadastrados();
      return data;
    }
  );

  const { control, watch } = useForm<FormCampeonatosFields>();

  const filtroTerminoCampeonato = watch("terminoCampeonato", null);
  const filtroJogos = watch("jogos", null);

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
            error={undefined}
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
            error={undefined}
          />
        </div>
        <SetasCarrossel tamanhoCardPx={350} ref={listagemCampeonatoRef} />
      </header>
      <div
        className="flex gap-5 mt-5 flex-nowrap overflow-x-scroll scroll-smooth scrollbar-none"
        ref={listagemCampeonatoRef}
      >
        {campeonatosCadastrados?.length &&
          campeonatosCadastrados.map((campeonato) => (
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
