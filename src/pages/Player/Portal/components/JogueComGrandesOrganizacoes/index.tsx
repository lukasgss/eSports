import CardOrganizacao from "./CardOrganizacao";

import loud from "../../../../../assets/img/EquipesESports/loud.png";
import painGaming from "../../../../../assets/img/EquipesESports/painGaming.png";
import furia from "../../../../../assets/img/EquipesESports/furia.png";
import intz from "../../../../../assets/img/EquipesESports/intz.png";
import redCanids from "../../../../../assets/img/EquipesESports/redCanids.webp";
import imperial from "../../../../../assets/img/EquipesESports/imperial.png";
import Button from "../../../../../components/Common/Button";

const JogueComGrandesOrganizacoes = () => {
  const organizacoes = [
    { link: "https://www.soupain.com.br/", image: painGaming },
    { link: "https://loud.gg/", image: loud },
    { link: "https://www.furia.gg/", image: furia },
    { link: "https://imperialesports.com.br/", image: imperial },
    { link: "https://www.intz.com.br/", image: intz },
    { link: "https://redcanids.com.br/", image: redCanids },
  ];

  return (
    <div className="px-10 py-16 bg-[#151c26] w-full">
      <span className="block text-2xl text-light-gray text-center mb-2">
        Jogue com as grandes
      </span>
      <h2 className="text-center text-primary-pink font-bold text-5xl">
        Organizações
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-7 ">
        {organizacoes.map((organizacao) => (
          <a
            key={organizacao.link}
            href={organizacao.link}
            target="_blank"
            rel="noreferrer, nofollow"
          >
            <CardOrganizacao
              key={organizacao.link}
              imagem={organizacao.image}
            />
          </a>
        ))}
      </div>
      <div className="w-fit mx-auto mt-10">
        <Button>Veja mais</Button>
      </div>
    </div>
  );
};

export default JogueComGrandesOrganizacoes;
