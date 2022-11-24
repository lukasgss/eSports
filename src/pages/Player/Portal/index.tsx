import React, { useState } from "react";
import Modal from "../../../components/Common/Modais/ModalImagem";
import FormCadastro from "./components/FormCadastro";
import NavbarPlayerNoAuth from "../../../components/Navbar/NavbarPlayerNoAuth";
import FormLogin from "./components/FormLogin";
import LandingPage from "./components/LandingPage";
import ProximasCompeticoes from "./components/ProximasCompeticoes";
import VerCompeticoes from "./components/VerCompeticoes";
import UltimasNoticias from "./components/Noticias/UltimasNoticias";
import JogueComGrandesOrganizacoes from "./components/JogueComGrandesOrganizacoes";
import Footer from "../../../components/Footer/Footer";

import "./index.scss";

const Portal = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalCadastro, setIsOpenModalCadastro] = useState(false);

  return (
    <div className="bg-darker-blue">
      <NavbarPlayerNoAuth setIsOpenModalLogin={setIsOpenModalLogin} />

      <LandingPage />
      <ProximasCompeticoes />
      <VerCompeticoes />
      <UltimasNoticias />
      <JogueComGrandesOrganizacoes />
      <Footer />

      <Modal
        isOpen={isOpenModalCadastro}
        setIsOpen={setIsOpenModalCadastro}
        titulo="Criar conta"
        descricao="O usuário ganha acesso para participar de campeonatos, perfil personalizável
        e a grande chance de se tornar um jogador profissional."
      >
        <FormCadastro setIsOpenModalCadastro={setIsOpenModalCadastro} />
      </Modal>

      <Modal
        isOpen={isOpenModalLogin}
        setIsOpen={setIsOpenModalLogin}
        titulo="Entrar"
        descricao="O usuário ganha acesso para participar de campeonatos, perfil personalizável e a grande chance de se tornar um jogador profissional."
      >
        <FormLogin setIsOpenModalCadastro={setIsOpenModalCadastro} />
      </Modal>
    </div>
  );
};

export default Portal;
