import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { obterListagemNoticias } from "../../../../services/Api";

interface Noticia {
  id: number;
  image: string;
  title: string;
  description: string;
  data: string;
  link: string;
}

const FeedNoticias = () => {
  const { data: dadosNoticias } = useQuery(
    ["noticiasHome"],
    async (): Promise<Noticia[]> => {
      const { data } = await obterListagemNoticias();
      return data;
    }
  );

  return (
    <div className="w-full lg:w-2/3 text-light-gray">
      <h2 className="text-center lg:text-left text-white text-4xl mb-7 mt-10 font-bold">
        Fique por dentro
      </h2>
      <div className="flex flex-col gap-7">
        {dadosNoticias?.length &&
          dadosNoticias.map((dado) => (
            <div
              key={dado.id}
              className="flex items-center gap-5 bg-primary-gray p-3 rounded-md"
            >
              <div>
                <img
                  src={dado.image}
                  alt="Imagem notícia"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h5 className="text-white uppercase font-semibold">
                  {dado.title}
                </h5>
                <p className="leading-6">{dado.description}</p>
                <div className="flex justify-between mt-3">
                  <span className="flex gap-2 items-center">
                    <AiOutlineCalendar className="w-5 h-5 text-light-gray" />{" "}
                    {dado.data}
                  </span>
                  <a
                    href={dado.link}
                    target="_blank"
                    className="underline text-primary-pink"
                    rel="noreferrer nofollow"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center mt-10 pb-4">
        <a
          href="/vejamais"
          target="_blank"
          className="text-primary-pink underline text-xl"
          rel="noreferrer nofollow"
        >
          Veja mais
        </a>
      </div>
    </div>
  );
};

export default FeedNoticias;
