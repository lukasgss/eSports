import React from "react";
import Button from "../../../../components/Common/Button";
import { CardDivulgacao } from "./CardDivulgacao";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-auto xl:h-[calc(100vh-64px)] w-full">
      <div className="flex h-screen md:h-full landingPageImageMobile bg-transparent">
        <div className="w-full min-h-fit flex flex-col gap-6 items-center justify-center flex-1 px-6 lg:px-12 bg-transparent xl:bg-darker-blue text-white py-7 xl:pb-5 2xl:py-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-[45px] md:leading-[70px] md:px-5 lg:px-16 w-full lg:max-w-[70%] xl:max-w-[90%]">
            Bora conectar na sua próxima
            <span className="text-primary-pink"> jornada gamer</span>
          </h1>
          <p className="text-2xl md:text-3xl leading-10 px-5 lg:px-14 w-full lg:max-w-[70%] xl:max-w-[90%] font-semibold">
            A nossa companhia transforma todos os eventos gamers em uma
            experiência profissional!
          </p>
          <div className="w-full lg:max-w-[70%] xl:max-w-[90%] md:px-5 lg:px-14">
            <div className="max-w-[330px]">
              <Button>Encontre mais torneios agora</Button>
            </div>
          </div>
        </div>
        <div className="hidden xl:block landingPageImageDesktop w-full flex-1" />
      </div>
      <div className="flex pt-5 xl:pt-0 text-white bg-darker-blue min-h-3/5">
        <div className="flex flex-wrap justify-around gap-5 m-6 mt-0 bg-dark-blue rounded-[35px] w-full">
          <CardDivulgacao />
          <CardDivulgacao />
          <CardDivulgacao />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
