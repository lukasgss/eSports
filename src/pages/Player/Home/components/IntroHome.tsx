import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb";
import Button from "../../../../components/Common/Button";
import Tag from "../../../../components/Tag";
import DropdownPerfil from "./DropdownPerfil";
import Notificacoes from "./Notificacoes";

const IntroHome = () => {
  const breadcrumbs = [
    {
      text: "eSports",
      link: "/",
    },
    {
      text: "Home",
    },
  ];

  return (
    <div className="w-full">
      <div className="imagemBackgroundHomePlayer">
        <div className="flex justify-between items-center pt-5">
          <div className="w-full flex justify-between pl-10">
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <Notificacoes />
          </div>
          <DropdownPerfil />
        </div>
        <div className="text-white max-w-[640px] text-lg ml-10">
          <h2 className="text-primary-pink font-bold text-5xl mt-7 mb-14">
            Home
          </h2>
          <span className="font-bold uppercase text-5xl">Jester Game Cup</span>
          <p className="text-lighter-gray mt-4 leading-8">
            A cada ano que passa os esportes eletrônicos (eSports) crescem cada
            vez mais. Em 2019, a Copa do Mundo de League of Legends (LOL)
            registrou 99,6 milhões de pessoas
          </p>
          <div className="mt-5 pb-5">
            <Tag nome="Fifa 2022" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-5 pl-10">
        <Button>Inscrever</Button>
        <Button color="transparent">Saiba mais</Button>
      </div>
    </div>
  );
};

export default IntroHome;
