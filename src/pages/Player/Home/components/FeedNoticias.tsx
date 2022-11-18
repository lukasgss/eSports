import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

import feedNoticiasImage from "../../../../assets/img/feedNoticiasImage.png";

const FeedNoticias = () => {
  const dadosNoticias = [
    {
      id: 1,
      image: feedNoticiasImage,
      title: "League of Legends",
      description:
        "A live vai ser BRABA, com final do campeonato, shows, Goldizin na faixa e muito mais...",
      data: "21 de Fevereiro, 2021",
      link: "https://google.com",
    },
    {
      id: 2,
      image: feedNoticiasImage,
      title: "League of Legends",
      description:
        "A live vai ser BRABA, com final do campeonato, shows, Goldizin na faixa e muito mais...",
      data: "21 de Fevereiro, 2021",
      link: "https://google.com",
    },
    {
      id: 3,
      image: feedNoticiasImage,
      title: "League of Legends",
      description:
        "A live vai ser BRABA, com final do campeonato, shows, Goldizin na faixa e muito mais...",
      data: "21 de Fevereiro, 2021",
      link: "https://google.com",
    },
  ];

  return (
    <div className="w-full lg:w-2/3 text-light-gray">
      <h2 className="text-center lg:text-left text-white text-4xl mb-7 mt-10 font-bold">
        Fique por dentro
      </h2>
      <div className="flex flex-col gap-7">
        {dadosNoticias.map((dado) => (
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
          href="#"
          target="_blank"
          className="text-primary-pink underline text-xl"
        >
          Veja mais
        </a>
      </div>
    </div>
  );
};

export default FeedNoticias;
