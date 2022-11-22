import React from "react";
import { useForm } from "react-hook-form";
import Text from "../../../../components/Common/Input/Text";
import Textarea from "../../../../components/Common/Input/Textarea";
import FileInput from "../../../../components/Common/Input/FileInput";
import { File } from "../../../../services/CommonTypes/index";

interface SuporteFields {
  destinatario: string;
  assunto: string;
  mensagem: string;
  anexos: File[];
}

const FormularioSuporte = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SuporteFields>();

  const files = watch("anexos");

  return (
    <div className="w-full bg-primary-gray mt-5 py-10 mb-5 mr-5">
      <form className="px-16 flex flex-col gap-8">
        <Text
          register={register}
          error={errors.destinatario}
          name="destinatario"
          placeholder="suporte@esports.com.br"
          textoLabel="Destinatário"
        />
        <Text
          register={register}
          error={errors.assunto}
          name="assunto"
          placeholder="Digite aqui..."
          textoLabel="Assunto"
        />
        <FileInput
          name="anexos"
          register={register}
          accept={{ "image/*": [".jpeg", ".jpg", ".png"] }}
          files={files}
          label="Anexo"
          setValue={setValue}
        />
        <Textarea
          register={register}
          name="mensagem"
          placeholder="Digite aqui..."
          textoLabel="Mensagem"
          error={errors.mensagem}
        />
      </form>
    </div>
  );
};

export default FormularioSuporte;
