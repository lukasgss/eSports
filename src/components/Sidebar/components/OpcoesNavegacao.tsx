import React from "react";
import { RiPencilFill } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

interface IOpcoesNavegacaoProps {
  expanded: boolean;
}

const OpcoesNavegacao = ({ expanded }: IOpcoesNavegacaoProps) => {
  const rotaAtual = useLocation().pathname;

  const opcoesNavegacao = [
    {
      text: "Home",
      link: "/home",
      icon: MdHome,
      active: rotaAtual === "/home",
    },
    {
      text: "Inscrições",
      link: "/inscricoes",
      icon: RiPencilFill,
      active: rotaAtual.includes("inscricoes"),
    },
    {
      text: "Campeonatos",
      link: "/campeonatos",
      icon: FaTrophy,
      active: rotaAtual === "/campeonatos",
    },
    {
      text: "Comunicados",
      link: "/comunicados",
      icon: IoMdMail,
      active: rotaAtual === "/comunicados",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="text-lighter-gray">
      {opcoesNavegacao.map((Opcao) => (
        <button
          key={Opcao.text}
          onClick={() => {
            navigate(Opcao.link);
          }}
          className="h-10 text-left flex items-center gap-3.5 p-0 mb-4"
        >
          {
            <>
              {Opcao.active ? (
                <span className="bg-primary-pink-gradient w-2 h-full" />
              ) : null}
              <span
                className={`${
                  Opcao.active
                    ? "bg-primary-pink-gradient text-white"
                    : "text-light-gray bg-primary-gray ml-[22px]"
                } p-1.5 rounded-md`}
              >
                <Opcao.icon title={Opcao.text} className="w-7 h-7" />
              </span>
            </>
          }
          {expanded ? <span className="font-bold">{Opcao.text}</span> : null}
        </button>
      ))}
    </div>
  );
};

export default OpcoesNavegacao;
