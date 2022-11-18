import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import { RiPencilFill } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

interface OpcaoNavegacao {
  text: string;
  link: string;
  icon: IconType;
  active: boolean;
}

const OpcoesNavegacao = () => {
  const [opcoesNavegacao, setOpcoesNavegacao] = useState<OpcaoNavegacao[]>([
    {
      text: "Home",
      link: "/home",
      icon: MdHome,
      active: true,
    },
    {
      text: "Inscrições",
      link: "/inscricoes",
      icon: RiPencilFill,
      active: false,
    },
    {
      text: "Campeonatos",
      link: "/campeonatos",
      icon: FaTrophy,
      active: false,
    },
    {
      text: "Comunicados",
      link: "/comunicados",
      icon: IoMdMail,
      active: false,
    },
    {
      text: "Contato",
      link: "/contato",
      icon: HiOutlineAtSymbol,
      active: false,
    },
  ]);

  const navigate = useNavigate();

  return (
    <div className="text-lighter-gray">
      {opcoesNavegacao.map((Opcao) => (
        <button
          key={Opcao.text}
          onClick={() => {
            navigate(Opcao.link);
            const opcoesNavegacaoAtualizadas = opcoesNavegacao.map((opcao) =>
              opcao.text === Opcao.text
                ? { ...Opcao, active: true }
                : { ...opcao, active: false }
            );
            setOpcoesNavegacao(opcoesNavegacaoAtualizadas);
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
                <Opcao.icon className="w-7 h-7" />
              </span>
            </>
          }
          <span className="font-bold">{Opcao.text}</span>
        </button>
      ))}
    </div>
  );
};

export default OpcoesNavegacao;
