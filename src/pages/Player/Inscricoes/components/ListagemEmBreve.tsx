import React from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../../../../components/Common/Button";
import Dropdown from "../../../../components/Common/Input/Dropdown";
import CardCompeticao from "./CardCompeticao";

const ListagemEmBreve = () => {
  const { control } = useForm();

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
          />
        </div>
        <div className="flex gap-2">
          <Button color="gray">
            <IoIosArrowBack className="w-6 h-6 text-light-gray" />
          </Button>
          <Button color="gray">
            <IoIosArrowForward className="w-6 h-6 text-light-gray" />
          </Button>
        </div>
      </div>
      <div className="mt-4 flex gap-8">
        {Array(5)
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

export default ListagemEmBreve;
