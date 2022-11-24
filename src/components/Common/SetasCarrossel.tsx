import React, { MutableRefObject } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "./Button";

interface ISetasCarroselProps {
  tamanhoCardPx: number;
}

const SetasCarrossel = React.forwardRef<
  HTMLDivElement | null,
  ISetasCarroselProps
>(({ tamanhoCardPx }, ref) => {
  const scroll = (direcao: string, tamanhoCard: number) => {
    const divRef = ref as MutableRefObject<HTMLDivElement>;

    if (direcao === "forward") {
      divRef.current.scrollLeft += tamanhoCard + 20;
    } else {
      divRef.current.scrollLeft += -tamanhoCard - 20;
    }
  };

  return (
    <div className="flex gap-2">
      <Button color="gray" action={() => scroll("back", tamanhoCardPx)}>
        <IoIosArrowBack className="w-6 h-6 text-light-gray" />
      </Button>
      <Button color="gray" action={() => scroll("forward", tamanhoCardPx)}>
        <IoIosArrowForward className="w-6 h-6 text-light-gray" />
      </Button>
    </div>
  );
});

export default SetasCarrossel;
