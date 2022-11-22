import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Common/Button";
import FileInput from "../../../../components/Common/Input/FileInput";
import { File } from "../../../../services/CommonTypes/index";

interface RequisitosField {
  comprovanteMatricula: File[];
}

const Requisitos = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RequisitosField>();

  const comprovanteMatricula = watch("comprovanteMatricula");

  const navigate = useNavigate();

  return (
    <div className="w-full pr-5 md:w-2/3 h-fit text-light-gray mt-5 rounded-md">
      <div className="bg-primary-gray mb-2.5 pb-3">
        <h2 className="font-bold text-4xl p-5 pb-4 text-[#e8e8e8]">
          Requisitos
        </h2>

        <div className="w-full h-[2px] bg-[#464646] my-4" />

        <div className="px-8">
          <FileInput
            name="comprovanteMatricula"
            label="Comprovante de matrícula"
            register={register}
            accept={{ "image/*": [".jpeg", ".jpg", ".png"] }}
            files={comprovanteMatricula}
            setValue={setValue}
            showNoFileText={false}
            textButton="Escolher arquivo"
          />
        </div>

        <div className="w-full h-[2px] bg-[#464646] my-4" />

        <div className="px-8">
          <p className="leading-7">
            <span className="text-lighter-gray">Atenção: </span>Confira o
            regulamento da competição e aplique seu{" "}
            <span className="text-lighter-gray">
              Código de desconto, CPF ou Matrícula de Sócio
            </span>{" "}
            na etapa seguinte de pagamento para atualizar o valor da inscrição o
            <span className="text-lighter-gray"> desconto integral</span>{" "}
            (R$0.00)
          </p>
          <div className="flex flex-col gap-5 my-6">
            <Button>Inscrever</Button>
            <Button color="transparent" action={() => navigate("/inscricoes")}>
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisitos;
