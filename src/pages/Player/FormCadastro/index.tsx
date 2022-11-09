import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Text from "../../../components/Common/Input/Text";
import Password from "../../../components/Common/Input/Password";
import Button from "../../../components/Common/Button";
import LoginSocial from "./components/LoginSocial";
import { useNavigate } from "react-router-dom";

interface FormCadastroPlayerData {
  nomeCompleto: string;
  email: string;
  senha: string;
}

interface FormCadastroProps {
  setIsOpenModalCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCadastro = ({ setIsOpenModalCadastro }: FormCadastroProps) => {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    nomeCompleto: yup.string().required("Obrigatório"),
    email: yup.string().email("E-mail inválido").required("Obrigatório"),
    senha: yup.string().required("Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCadastroPlayerData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/somewhere");
    }, 800);
  });

  return (
    <div className="flex justify-center items-center w-full px-3">
      <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-4 w-full">
        <Text
          register={register}
          error={errors.nomeCompleto}
          textoLabel="Nome completo"
          name="nomeCompleto"
          placeholder="Digite aqui..."
        />
        <Text
          register={register}
          error={errors.email}
          textoLabel="E-mail"
          name="email"
          placeholder="Digite aqui..."
        />
        <Password
          register={register}
          error={errors.senha}
          textoLabel="Senha"
          name="senha"
          placeholder="Digite aqui..."
        />
        <Button loading={loading} submit>
          Enviar
        </Button>
        <LoginSocial />
        <div className="mt-2 mb-4 text-center">
          <button
            type="button"
            onClick={() => setIsOpenModalCadastro(false)}
            className="underline font-normal"
          >
            Já tem conta? Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCadastro;
