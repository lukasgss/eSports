import React, { useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import PlayerSidebar from "../../../components/Sidebar/PlayerSidebar";
import DropdownPerfil from "../Home/components/DropdownPerfil";
import Notificacoes from "../Home/components/Notificacoes";
import CaixaDeEntrada from "./components/CaixaDeEntrada";
import MensagemContato from "./components/MensagemContato";
import { Notificacao } from "./components/types";

const Comunicados = () => {
  const [modalMobileIsOpen, setModalMobileIsOpen] = useState(false);
  const [notificacaoClicada, setNotificacaoClicada] =
    useState<Notificacao | null>(null);

  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([
    {
      id: 1,
      remetente: "Ruan12",
      assunto: "Comp das lendas",
      mensagem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facere! Expedita vitae cum cumque! Modi nihil doloribus hic quo porro corporis facilis explicabo vero esse alias tenetur ipsam quas saepe molestias earum placeat deserunt unde, accusamus expedita nemo ex ut nesciunt aut? Provident temporibus perferendis architecto, id consequatur blanditiis soluta nam recusandae quibusdam neque rem et tenetur assumenda quo laudantium beatae dignissimos fuga voluptatem incidunt necessitatibus eos ratione consequuntur eum quae. Officia accusantium rerum consectetur amet facere tempora magnam, optio ullam a libero vero? Corrupti necessitatibus voluptatum cum velit optio aliquid ad tempora iure perferendis sit? Non at fugiat delectus.",
      lido: false,
      data: "Qui, 17/03",
    },
    {
      id: 2,
      remetente: "Ruan12",
      assunto: "Comp das lendas",
      mensagem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum id minus quae! Maxime illum sed veritatis et rem blanditiis odio laborum accusantium nobis sequi.",
      lido: false,
      data: "Qui, 17/03",
    },
    {
      id: 3,
      remetente: "Ruan12",
      assunto: "Comp das lendas",
      mensagem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum id minus quae! Maxime illum sed veritatis et rem blanditiis odio laborum accusantium nobis sequi.",
      lido: false,
      data: "Qui, 17/03",
    },
    {
      id: 4,
      remetente: "Ruan12",
      assunto: "Comp das lendas",
      mensagem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum id minus quae! Maxime illum sed veritatis et rem blanditiis odio laborum accusantium nobis sequi.",
      lido: false,
      data: "Qui, 17/03",
    },
    {
      id: 5,
      remetente: "Ruan12",
      assunto: "Comp das lendas",
      mensagem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum id minus quae! Maxime illum sed veritatis et rem blanditiis odio laborum accusantium nobis sequi.",
      lido: false,
      data: "Qui, 17/03",
    },
    {
      id: 6,
      remetente: "Ruan12",
      assunto: "Comp das lendas",
      mensagem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum id minus quae! Maxime illum sed veritatis et rem blanditiis odio laborum accusantium nobis sequi.",
      lido: false,
      data: "Qui, 17/03",
    },
  ]);

  const breadcrumbs = [
    {
      text: "eSports",
      link: "/",
    },
    {
      text: "Comunicados",
    },
  ];

  return (
    <div className="flex bg-[#131c29] text-white">
      <PlayerSidebar />
      <div className="pl-3 sm:pl-10 mt-10 w-full">
        <div className="w-full flex justify-between">
          <div className="flex w-full justify-between ">
            <div className="hidden sm:block">
              <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
            <div className="flex w-full justify-end">
              <Notificacoes />
            </div>
          </div>
          <div>
            <DropdownPerfil />
          </div>
        </div>
        <h2 className="text-primary-pink font-bold text-5xl my-10">
          Comunicados
        </h2>
        <div className="flex gap-5 pr-3 sm:pr-8 pb-10">
          <CaixaDeEntrada
            notificacoes={notificacoes}
            setNotificacoes={setNotificacoes}
            setNotificacaoClicada={setNotificacaoClicada}
            setModalMobileIsOpen={setModalMobileIsOpen}
          />
          <MensagemContato
            remetente={notificacaoClicada?.remetente}
            assunto={notificacaoClicada?.assunto}
            data={notificacaoClicada?.data}
            mensagem={notificacaoClicada?.mensagem}
            modalMobileIsOpen={modalMobileIsOpen}
            setModalMobileIsOpen={setModalMobileIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Comunicados;
