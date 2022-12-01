import React, { Dispatch, SetStateAction } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../../../../components/Common/Modais/Modal";
import Text from "../../../../components/Common/Input/Text";
import Datepicker from "../../../../components/Common/Input/Datepicker/Datepicker";
import Dropdown, {
  DadosDropdown,
} from "../../../../components/Common/Input/Dropdown";
import Textarea from "../../../../components/Common/Input/Textarea";
import Button from "../../../../components/Common/Button";

interface IModalPropostaHorarioProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface FormPropostaHorarioFields {
  destinatario: string;
  dataPartida: string;
  novoHorario: string;
  mensagem: string;
}

const ModalPropostaHorario = ({
  isOpen,
  setIsOpen,
}: IModalPropostaHorarioProps) => {
  const schema = yup.object().shape({
    destinatario: yup.string().required("Obrigatório").email("E-mail inválido"),
    dataPartida: yup.string().required("Obrigatório"),
    novoHorario: yup.mixed<DadosDropdown>().required("Obrigatório"),
    mensagem: yup.string().required("Obrigatório"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPropostaHorarioFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const arrHorarios = [
    { text: "07:00", value: 1 },
    { text: "08:00", value: 2 },
    { text: "09:00", value: 3 },
    { text: "10:00", value: 4 },
    { text: "11:00", value: 5 },
    { text: "12:00", value: 6 },
    { text: "13:00", value: 7 },
    { text: "14:00", value: 8 },
    { text: "15:00", value: 9 },
    { text: "16:00", value: 10 },
    { text: "17:00", value: 11 },
    { text: "18:00", value: 12 },
    { text: "19:00", value: 13 },
  ];

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="w-[600px]">
      <div className="w-full p-8">
        <h2 className="text-primary-pink text-5xl font-bold mb-5">
          Nova proposta de horário
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <Text
            name="destinatario"
            placeholder="exemplo@email.com.br"
            register={register}
            textoLabel="Destinatário"
            error={errors.destinatario}
          />
          <div className="flex items-center gap-5">
            <Datepicker
              name="dataPartida"
              control={control}
              textoLabel="Data da partida"
              error={errors.dataPartida}
            />
            <Dropdown
              name="novoHorario"
              control={control}
              arrDados={arrHorarios}
              placeholder="Horário"
              textoLabel="Horário do jogo"
              error={errors.novoHorario}
            />
          </div>
          <Textarea
            name="mensagem"
            placeholder="Digite aqui..."
            register={register}
            textoLabel="Mensagem"
            error={errors.mensagem}
          />
          <Button submit>Enviar proposta de horário</Button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalPropostaHorario;
