import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../../components/Common/Button";
import Password from "../../../components/Common/Input/Password";
import Text from "../../../components/Common/Input/Text";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormLoginFields {
  email: string;
  senha: string;
}

interface FormLoginProps {
  setIsOpenModalCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormLogin = ({ setIsOpenModalCadastro }: FormLoginProps) => {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Obrigatório").email("E-mail inválido"),
    senha: yup.string().required("Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginFields>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/somewhere");
    }, 1000);
  });

  return (
    <div className="min-w-[350px] flex justify-center items-center">
      <form onSubmit={onSubmit} className="flex flex-col gap-5 px-5 mt-4">
        <Text
          name="email"
          register={register}
          textoLabel="E-mail"
          placeholder="Digite aqui..."
          error={errors.email}
        />
        <div>
          <Password
            name="senha"
            register={register}
            textoLabel="Senha"
            placeholder="Digite aqui..."
            error={errors.senha}
          />
          <button className="w-fit text-left pr-0 pt-0 pl-1 text-primary-pink font-normal">
            Esqueceu a senha?
          </button>
        </div>
        <Button loading={loading} submit>
          Entrar
        </Button>
        <button
          onClick={() => setIsOpenModalCadastro(true)}
          className="mb-2 underline text-gray-200 font-normal"
        >
          Ainda não tem conta? Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
