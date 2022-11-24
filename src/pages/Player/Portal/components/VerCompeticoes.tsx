import React from "react";
import Button from "../../../../components/Common/Button";

import verCompeticoes from "../../../../assets/img/Portal/verCompeticoes.png";

const VerCompeticoes = () => {
  return (
    <div className="flex flex-col md:flex-row my-16 py-20 gap-5 text-white bg-[#141b25]">
      <div className="flex items-center justify-center flex-1">
        <div className="flex flex-col items-center px-8">
          <h3 className="text-5xl mb-4 font-bold">
            Jogue com os <span className="text-primary-pink">melhores</span>
          </h3>
          <p className="font-bold leading-8 max-w-lg">
            Aqui você tem a experiência profissional em diversas competições
            incríveis. Comece a sua jornada pelo seu game favorito e seja o
            próximo PRO Player do cenário gamer.
          </p>
          <div className="w-full mt-4 flex justify-start">
            <Button>Ver competições</Button>
          </div>
        </div>
      </div>
      <div className="flex-1 mx-auto mt-3 md:mt-0 md:mx-0">
        <img
          src={verCompeticoes}
          alt="Imagem representativa de um pro player"
        />
      </div>
    </div>
  );
};

export default VerCompeticoes;
