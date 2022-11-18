import React from "react";

interface TagProps {
  nome: string;
}

const Tag = ({ nome }: TagProps) => {
  return (
    <span className="text-[#bbb] bg-primary-gray p-2 uppercase rounded-md font-bold">
      {nome}
    </span>
  );
};

export default Tag;
