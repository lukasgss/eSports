import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../Common/Button";

import websiteLogo from "../../assets/img/websiteLogo.png";

interface NavbarPlayerNoAuthProps {
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarPlayerNoAuth = ({
  setIsOpenModalLogin,
}: NavbarPlayerNoAuthProps) => {
  return (
    <nav className="flex items-center justify-between bg-darker-blue px-8 py-2 w-full">
      <Link to="/" className="block">
        <img className="w-12 h-12" src={websiteLogo} alt="Logo" />
      </Link>
      <div className="items-center gap-5 hidden lg:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/campeonatos">Campeonatos</NavLink>
        <NavLink to="/noticias">Notícias</NavLink>
        <NavLink to="/players">Players</NavLink>
      </div>
      <div className="items-center gap-5 hidden lg:flex">
        <NavLink to="/criar-campeonato">Criar campeonato</NavLink>
        <Button action={() => setIsOpenModalLogin(true)}>Entrar</Button>
      </div>
      <AiOutlineMenu className="w-7 h-7 text-white block lg:hidden" />
    </nav>
  );
};

export default NavbarPlayerNoAuth;
