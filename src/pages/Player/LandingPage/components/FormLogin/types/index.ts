export interface FormLoginFields {
  email: string;
  senha: string;
}

export interface FormLoginProps {
  setIsOpenModalCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}
