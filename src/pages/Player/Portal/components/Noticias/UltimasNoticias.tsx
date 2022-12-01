import React from "react";
import Button from "../../../../../components/Common/Button";
import CardNoticia from "./CardNoticia";

const UltimasNoticias = () => {
  return (
    <div>
      <span className="block mb-2 text-center text-light-gray text-3xl font-bold">
        Fique por dentro das últimas
      </span>
      <h2 className="text-primary-pink text-center text-5xl font-bold">
        Notícias
      </h2>
      <div className="mt-5 px-5 grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {Array(4)
          .fill(0)
          .map((_el, idx) => (
            <CardNoticia
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              titulo="Como se torna o melhor jogador?"
              descricao="A live vai ser BRABA, com final do campeonato, shows, Goldizin na faixa e muito mais.."
              data="21 de Fevereiro, 2023"
            />
          ))}
      </div>
      <div className="w-fit mx-auto py-9">
        <Button>Veja mais</Button>
      </div>
    </div>
  );
};

export default UltimasNoticias;
