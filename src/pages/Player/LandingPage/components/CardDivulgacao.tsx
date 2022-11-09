import React from "react";
import { HiHeart } from "react-icons/hi";

export const CardDivulgacao = () => {
  return (
    <div className="flex flex-col justify-center gap-1 max-w-[350px] p-5">
      <HiHeart className="h-12 w-12" />
      <h3 className="text-primary-pink text-4xl">Campeonatos</h3>
      <p className="leading-7 text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus facilis
        quasi sint corporis molestiae cupiditate!
      </p>
    </div>
  );
};
